import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;
const BASE_URL = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master`;

const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`
  }
});

function resolveAssets(items, includes) {
  const assetMap = new Map();

  // Build a map of assets
  if (includes?.Asset) {
    for (const asset of includes.Asset) {
      assetMap.set(asset.sys.id, asset);
    }
  }

  for (const item of items) {
    // Resolve backgroundImage if it's a linked asset
    const bg = item.fields.backgroundImage;
    if (bg?.sys?.type === "Link" && bg?.sys?.linkType === "Asset") {
      const assetId = bg.sys.id;
      const resolved = assetMap.get(assetId);
      if (resolved) {
        item.fields.backgroundImage = resolved;
      }
    }

    // Repeat similar logic for blogImage or other assets if needed
    if (item.fields.blogImage?.sys?.id) {
      const blogImg = assetMap.get(item.fields.blogImage.sys.id);
      if (blogImg) {
        item.fields.blogImage = blogImg;
      }
    }

    // Repeat for mod.fields.image (inside modules)
    if (item.fields.image?.sys?.id) {
      const modImg = assetMap.get(item.fields.image.sys.id);
      if (modImg) {
        item.fields.image = modImg;
      }
    }
  }

  return items;
}

async function fetchEntries(contentType) {
  const response = await client.get(`/entries`, {
    params: {
      content_type: contentType,
      include: 2
    }
  });

  return resolveAssets(response.data.items, response.data.includes);
}

export default async function () {
  return {
    banner: await fetchEntries("banner"),
    blogs: await fetchEntries("blog"),
    modules: await fetchEntries("textModule")
  };
}

# Casepoint Static Website

This is a static website built using **Eleventy (11ty)** and **Contentful CMS**. It is deployed via **GitHub Actions** and hosted on **AWS S3 Bucket**.

---

## 🛠 Tech Stack

- **Frontend Framework**: [Eleventy (11ty)](https://www.11ty.dev/)
- **Content Management**: [Contentful](https://www.contentful.com/)
- **Styling**: Custom CSS
- **Deployment**: GitHub Actions → AWS S3 Bucket

---

## 📦 Features

- Dynamic content from Contentful (banners, blogs, text modules)
- Modular Nunjucks templates
- Consistent styling with minimal UX
- Structured components (header, banner, blogs, highlights, footer)
- Automatic deployment using GitHub CI/CD

---

## 🚀 Live Site

🔗 **Live URL**: [http://shivani-casepoint-website.s3-website.ap-south-1.amazonaws.com/](http://shivani-casepoint-website.s3-website.ap-south-1.amazonaws.com/)

---

## ⚙️ Setup & Installation

1. **Clone the repository**
   
   git clone https://github.com/ShivaniAgarwal07/casepoint-website.git
   cd casepoint-website

2. **Install dependencies**

    npm install

3. **Add environment variables**

    ⚠️ To run the site locally with dynamic content, you’ll need:

    Your own Contentful space
    Matching content types (blogs, modules, etc.)
    Environment variables in a .env file:


    CONTENTFUL_SPACE_ID=your_space_id
    CONTENTFUL_ACCESS_TOKEN=your_access_token

    Without this setup, the site will not render dynamic data.

4. **Run locally**

    npm run build
    npm start


## 🔄 Deployment (CI/CD)

The site is deployed using GitHub Actions and hosted on AWS S3 + CloudFront.

On push to main, GitHub Action builds the site and deploys it to S3.

CloudFront is used to serve the site via CDN globally.

Workflow file: .github/workflows/deploy.yml


## 🌐 Contentful Webhook Setup

A webhook is configured in Contentful to trigger rebuilds on content changes.

Webhook Settings:

URL: GitHub repository dispatch endpoint (used for triggering Actions)

Triggers: Entry publish/unpublish events

Method: POST

Authentication: GitHub token in headers

📸 Screenshot attached in submission.


## 🧑‍💻 Author

Shivani Agarwal
Web Developer – Frontend | CMS | Static Sites

🔗 **GitHub Profile**: [https://github.com/ShivaniAgarwal07/](https://github.com/ShivaniAgarwal07/)



export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6273408ad0ddbc491f23514c",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-1-studio-xvksj3f5",
                  apiId: "607cef90-8ee7-4d57-94f3-2a38384a0b85",
                },
                {
                  buildHookId: "6273408ae0ae294a4c58ac13",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-1-web-35u7zuv8",
                  apiId: "39f2d4c3-19bb-47f2-9ed1-671c00cd0877",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/kman62/sanity-gatsby-blog1",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-1-web-35u7zuv8.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};

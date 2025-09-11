fn template(context, props, content) {
  context.assets.add("resources/css/layout-minimal.css");

  if context.is_watching {
    context.assets.add("resources/ts/global-live-reload.mjs");
  }

  component {
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <link rel="canonical" href={context.reference.canonical_link}>

        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        {if context.is_watching {
          component {
            <meta name="poet:is_watching" value="true">
          }
        }}
        {if !context.front_matter.description.is_empty() {
          component {
            <meta name="description" content={context.front_matter.description}>
          }
        }}

        <title>{
          let base_title = "Intentee";

          if context.front_matter.title.is_empty() {
            base_title
          } else {
            `${context.front_matter.title} - ${base_title}`
          }
        }</title>
        {context.assets.render()}
      </head>
      <body>
        <div class="page">
          <nav class="page-navigation">
            <div class="page-navigation__track">
              <a class="page-navigation__link page-navigation__link--site-name" href={context.link_to("index")}>
                Intentee
              </a>
              <a class="page-navigation__link" href={context.link_to("#test-page")}>
                Test page
              </a>
            </div>
          </nav>
          <main class="page-main">
            {content}
          </main>
          <footer class="page-footer">
            <div class="page-footer__links">
              <a href="https://github.com/intentee" target="_blank">Open Source</a>
              <a href="mailto:hello@intentee.com" target="_blank">Contact us</a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  }
}

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
        <link rel="icon" href={context.assets.file("resources/media/favicon.svg")}>

        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
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
              {/*
                <a class="page-navigation__link" href={context.link_to("#businesses")}>
                  Businesses
                </a>
                <a class="page-navigation__link" href={context.link_to("#community")}>
                  Community
                </a>
              */}
            </div>
          </nav>
          <main class="page-main">
            {content}
          </main>
          <footer class="page-footer">
            <div class="page-footer__links page-footer__links--pages">
              <a href={context.link_to("about-us")}>About us</a>
              <a href="https://github.com/intentee" target="_blank">Open Source</a>
              <a href="https://post-software.intentee.com/" target="_blank">Post Software</a>
              <a href={context.link_to("press")}>Press</a>
              <a href={context.link_to("contact-us")}>Contact us</a>
            </div>
            <div class="page-footer__links">
              <a
                href="https://bsky.app/profile/intentee.bsky.social"
                target="_blank"
              >
                <img alt="Bluesky" src={context.assets.file("resources/media/logo-bluesky.svg")}>
              </a>
              <a
                href="https://discord.gg/92x3Z8a4gj"
                target="_blank"
              >
                <img alt="Discord" src={context.assets.file("resources/media/logo-discord.svg")}>
              </a>
              <a
                href="https://www.linkedin.com/company/intentee"
                target="_blank"
              >
                <img alt="LinkedIn" src={context.assets.file("resources/media/logo-linkedin.svg")}>
              </a>
              <a
                href="https://x.com/intentee"
                target="_blank"
              >
                <img alt="X" src={context.assets.file("resources/media/logo-x.svg")}>
              </a>
              <a
                href="https://www.youtube.com/@intentee"
                target="_blank"
              >
                <img alt="YoutTube" src={context.assets.file("resources/media/logo-yt.svg")}>
              </a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  }
}

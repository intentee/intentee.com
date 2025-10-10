fn template(context, props, content) {
  context.assets.add("resources/css/component-team-member.css");

  let asset_path = context.assets.file(props.src);

  component {
    <div
      class="team-member"
      itemscope
      itemtype="http://schema.org/Person"
    >
      <h2 itemprop="jobTitle">{props.title}</h2>
      <img alt={props.title} itemprop="image" src={asset_path} />
      <div class="team-member__description" itemprop="description">
        {content}
      </div>
    </div>
  }
}

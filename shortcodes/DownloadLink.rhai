fn template(context, props, content) {
  component {
    <a
      href={context.assets.file(props.file)}
      download={props.file_name}
    >{content}</a>
  }
}

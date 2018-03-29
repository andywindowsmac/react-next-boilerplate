import NextHead from 'next/head';

interface HeadPropsType {
  title: string;
  description?: string;
  url?: string;
}

const Head: React.StatelessComponent<HeadPropsType> = props => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || ''}</title>
    <meta name="description" content={props.description || ''} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="/static/fonts-loader.css" />
    <link
      rel="icon"
      type="image/ico"
      href="favicon.ico"
    />
  </NextHead>
);

export default Head;

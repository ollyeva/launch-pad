import Head from "next/head";

export default function Seo() {

    const data = {
        title: 'Olly Evans - Creative Developer',
        description: 'I am Olly, a Creative Developer based in Melbourne. Mid Weight developer and designer with my Bachelor in Digital Media, currently looking for new work.',
        websiteUrl: 'https://ollyevans.xyz/'
    }

    return <Head>
        <title>Olly's Launch Pad</title>
        <meta name="title" content={data.title}/>
        <meta name="description" content={data.description}/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content={data.websiteUrl}/>
        <meta property="og:title" content={data.title}/>
        <meta property="og:description" content={data.description}/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta name="twitter:card" content="summary_large_image"/>

        <meta property="twitter:url" content={data.websiteUrl}/>
        <meta name="twitter:url" content={data.websiteUrl}/>

        <meta property="twitter:title" content={data.title}/>
        <meta name="twitter:title" content={data.title}/>

        <meta property="twitter:description" content={data.description}/>
        <meta name="twitter:description" content={data.description}/>

        <meta property="twitter:image" content="./sharing-image.png"/>
        <meta name="twitter:image" content="./sharing-image.png"/>

        <meta property="og:image" content="./sharing-image.png"/>
        <meta property="og:image:secure" content="./sharing-image.png"/>

        <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon"/>
    </Head>
}
import Head from "next/head";

interface Props {
    title: string;
    description: string;
}

const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Person",
    "name": "Mert Kadir",
    "image": "https://mertkadir.me/me.jpeg",
    "jobTitle": "Software Developer",
    "url": "https://mertkadir.me/",
    "sameAs": [
        "https://twitter.com/itsmertkadir",
        "https://github.com/itsmertkadir",
        "https://www.instagram.com/itsmertdev/"
    ]
}

export const Seo = () => {
    return (
        <Head>
            <title>Mert Kadir</title>
            <meta charSet={'UTF-8'}/>
            <meta name="title" content="Mert Kadir"/>
            <meta name="description"
                  content="Hi there, I'm Mert Kadir &mdash; a Mobil Application Developer from Ankara, Türkiye."/>
            <meta name="robots" content="index, follow"/>
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://mertkadir.me/"/>
            <meta property="og:title" content="Mert Kadir"/>
            <meta property="og:description"
                  content="Hi there, I'm Mert Kadir &mdash; a Mobil Application Developer from Ankara, Türkiye."/>
            <meta property="og:image" content="https://mertkadir.me/me.jpeg"/>
            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content="https://mertkadir.me/"/>
            <meta property="twitter:title" content="Mert Kadir"/>
            <meta property="twitter:description"
                  content="Hi there, I'm Mert Kadir &mdash; a Mobil Application Developer from Ankara, Türkiye."/>
            <meta property="twitter:image" content="https://mertkadir.me/me.jpeg"/>
            <meta name="google-site-verification" content="fUWKFpNoTkc-2r__GcxOnwOVFVXd6KMGlW3F4jpkKK4"/>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}}
            />
        </Head>
    );
};

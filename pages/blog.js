import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import Date from "../components/date";
import { getSortedPostsData } from "../lib/posts";
import Image from "next/image";
import { buildImageUrl } from "cloudinary-build-url";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  const pageTitle = "Blog - The Smart Way to Manage Money";
  const pageDescription =
    "Money relationships can be tough, we get it. So on our blog we teach you how to make the most of your money as an individual and with others on Tulix.";
  const pageImage =
    "https://res.cloudinary.com/tulix/image/upload/v1660840952/blog/Media-Link-Preview-Image_ihuwfk.png";
  return (
    <Layout>
      <Head>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content="https://tulix.app" />
        <meta property="og:image" content={pageImage} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />
        <title>{pageTitle}</title>
      </Head>

      <section className="about-us">
        <div className="container">
          <div className="row justify-content-lg-center ">
            <div className="col-lg-8 pb-5">
              <h2 className="section-title ">Blog</h2>
              <h6 className="text-success">
                Money relationships can be tough, we get it. So on our blog we
                teach you how to make the most of your money as an individual
                and with others on Tulix.
              </h6>
            </div>
            <div className="col-lg-8 mb-5">
              <div className="row">
                {allPostsData.map(
                  ({ id, date, author, thumbnail, excerpt, title }) => (
                    <div className="col-lg-6 mb-3" key={id}>
                      <div
                        className="card card-post h-100 border-0"
                        style={{ background: "#fcfdff" }}
                      >
                        <Image
                          src={buildImageUrl(`${thumbnail}`, {
                            cloud: {
                              cloudName: process.env.NEXT_PUBLIC_CY_NAME,
                            },
                            transformations: {
                              resize: {
                                type: "thumb",
                                width: 397,
                                aspectRatio: "1.5",
                                gravity: "auto:subject",
                              },
                            },
                          })}
                          alt={thumbnail}
                          className="card-img-top"
                          width={397}
                          height={256}
                        />
                        <div className="card-body px-0">
                          <h4 className="card-title">{title}</h4>
                          <p className="card-text">
                            {excerpt && excerpt.substring(0, 140) + "..."}
                          </p>
                          <p className="text-muted mb-0">{author}</p>
                          <small>
                            <Date dateString={date} />
                          </small>
                          <Link href={`/blog/${id}`}>
                            <a className="stretched-link"></a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

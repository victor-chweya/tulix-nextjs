import Image from "next/image";

export default function DownloadCTA() {
  return (
    <>
      <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start">
        <a
          href="https://apps.apple.com/ke/app/tulix/id1587163986"
          className="btn bg-dark btn-lg  mr-sm-3 mr-lg-4 mb-3"
          role="button"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/img/appstore-light.svg"
            className="pt-1"
            width={124}
            height={33}
            alt="App Store"
            priority
          />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.solutions.tulix"
          className="btn btn-dark btn-lg mb-3"
          role="button"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/img/googleplay-light.svg"
            className="pt-1"
            width={139}
            height={33}
            alt="Google Play"
          />
        </a>
      </div>
    </>
  );
}

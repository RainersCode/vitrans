import Link from "next/link";

export default function Breadcrumb({ breadcrumbTitle }) {
  return (
    <>
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}
      >
        <div className="shape-image float-bob-y">
          <img src="assets/img/vector.png" alt="img" />
        </div>
        <div className="container">
          <div className="breadcrumb-wrapper-items">
            <div className="page-heading">
              <div className="breadcrumb-sub-title">
                <h1 className="wow fadeInUp" data-wow-delay=".3s">
                  {breadcrumbTitle}
                </h1>
              </div>
              <ul
                className="breadcrumb-items wow fadeInUp"
                data-wow-delay=".5s"
              >
                <li>
                  <Link href="/">Sākums</Link>
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-slash-forward" />
                </li>
                <li>{breadcrumbTitle}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

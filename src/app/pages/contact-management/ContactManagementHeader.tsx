import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

const ContactManagementHeader: FC = () => {
  const location = useLocation();

  return (
    <div className="card mb-5 mb-xl-10">
      <div className="card-body pt-0 pb-0">
        <div className="d-flex overflow-auto h-55px">
          <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap">
            <li className="nav-item">
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === "/contact-management/whatsapp" &&
                    "active")
                }
                to="/contact-management/whatsapp"
              >
                Whatsapp
              </Link>
            </li>
            
            <li className="nav-item">
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === "/contact-management/facebook" &&
                    "active")
                }
                to="/contact-management/facebook"
              >
                Messenger
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === "/contact-management/instagram" &&
                    "active")
                }
                to="/contact-management/instagram"
              >
                Instagram
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === "/contact-management/telegram" &&
                    "active")
                }
                to="/contact-management/telegram"
              >
                Telegram
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export { ContactManagementHeader };

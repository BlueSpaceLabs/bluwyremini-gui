import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

const TemplateManagementHeader: FC = () => {
  const location = useLocation();

  return (
    <div className="card mb-1 mb-xl-1">
      <div className="card-body pt-0 pb-0">
        <div className="d-flex overflow-auto h-55px">
          <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap">
            <li className="nav-item">
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === "/template-management/whatsapp" &&
                    "active")
                }
                to="/template-management/whatsapp"
              >
                Whatsapp
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === "/template-management/facebook" &&
                    "active")
                }
                to="/template-management/facebook"
              >
                Messenger
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === "/template-management/instagram" &&
                    "active")
                }
                to="/template-management/instagram"
              >
                Instagram
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === "/template-management/telegram" &&
                    "active")
                }
                to="/template-management/telegram"
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

export { TemplateManagementHeader };

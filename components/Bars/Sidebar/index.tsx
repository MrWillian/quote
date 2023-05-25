import { QuoteAppIcon } from "../../QuoteAppIcon";
import { useAuth } from "../../../contexts/AuthContext";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export const Sidebar = () => {
  const { logout } = useAuth();
  const router = useRouter();
  const { t } = useTranslation();

  const handleLogout = async () => {
    const response = await logout();
    if (response) router.replace('/auth/login');
  }

  return (
    <div className="flex flex-row min-h-screen w-1/6 text-gray-800">
      <aside
        className="sidebar w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in"
      >
        <div className="sidebar-header flex items-center justify-center py-4">
          <div className="inline-flex">
            <a href="#" className="inline-flex flex-row items-center">
              <QuoteAppIcon />
            </a>
          </div>
        </div>
        <div className="sidebar-content px-4 py-6">
          <ul className="flex flex-col w-full">
            <li className="my-px">
              <a
                href="#"
                className="flex flex-row items-center justify-center h-10 px-3 rounded-lg text-gray-700 bg-accent-color"
              >
                <span className="flex items-center justify-center text-lg text-gray-200">
                  <svg
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </span>
                <span className="ml-3 text-gray-200">{t('dashboard.home')}</span>
              </a>
            </li>
            <li className="my-px">
              <button className="w-full" onClick={handleLogout}>
                <a
                  href="#"
                  className="flex flex-row items-center justify-center h-10 px-3 rounded-lg text-gray-700 bg-accent-color"
                >
                  <span className="flex items-center justify-center text-lg text-gray-200">
                    <svg
                      fill="#fa0000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 384.97 384.97"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path d="M180.455,360.91H24.061V24.061h156.394c6.641,0,12.03-5.39,12.03-12.03s-5.39-12.03-12.03-12.03H12.03 C5.39,0.001,0,5.39,0,12.031V372.94c0,6.641,5.39,12.03,12.03,12.03h168.424c6.641,0,12.03-5.39,12.03-12.03 C192.485,366.299,187.095,360.91,180.455,360.91z"></path>
                      <path d="M381.481,184.088l-83.009-84.2c-4.704-4.752-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l62.558,63.46H96.279 c-6.641,0-12.03,5.438-12.03,12.151c0,6.713,5.39,12.151,12.03,12.151h247.74l-62.558,63.46c-4.704,4.752-4.704,12.439,0,17.179 c4.704,4.752,12.319,4.752,17.011,0l82.997-84.2C386.113,196.588,386.161,188.756,381.481,184.088z"></path>
                    </svg>
                  </span>
                  <span className="ml-3 text-red-500">{t('dashboard.logout')}</span>
                </a>
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
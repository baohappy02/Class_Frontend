import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ArrowDownIcon, LangIcon } from "../../assets/icons";
import PropTypes from "prop-types";
import { useIntl, changeLocale } from "gatsby-plugin-react-intl";
import { Link } from "gatsby";

const DropdownMenu = (props) => {
  const { list_sub_menu, title } = props;
  const intl = useIntl();

  const _onChangeLang = (value) => {
    console.log(value);
    if (value === "en" || value === "vi") changeLocale(value, null);
  };

  return (
    <Popover key={title} className="relative">
      {({ open }) => (
        <>
          {title === "EN" || title === "VI" ? (
            <Popover.Button
              className={
                open
                  ? "p-3 border rounded-full font-medium bg-green-400 hover:bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-indigo-800 focus:outline-none cursor-pointe inline-flex items-center text-lg leading-4-5 font-semibold	"
                  : "p-3 border rounded-full font-medium bg-green-400 hover:bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-custom-text-black focus:outline-none cursor-pointe inline-flex items-center text-lg leading-4-5 font-semibold	 hover:text-indigo-800"
              }
            >
              <LangIcon className="w-5 h-5 mr-1 " />
              <span>{title}</span>
            </Popover.Button>
          ) : (
            <Popover.Button
              className={
                open
                  ? "p-3 border rounded-full font-medium bg-green-400 hover:bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-indigo-800 focus:outline-none cursor-pointe inline-flex items-center text-lg leading-4-5 font-semibold	"
                  : "p-3 border rounded-full font-medium bg-green-400 hover:bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-custom-text-black focus:outline-none cursor-pointe inline-flex items-center text-lg leading-4-5 font-semibold	 hover:text-indigo-800"
              }
            >
              <span>{title}</span>
              <ArrowDownIcon className="w-5 h-5" />
            </Popover.Button>
          )}

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel
              static
              className="absolute z-10 right-0 mt-3 transform px-2 w-auto max-w-md lg:mr-0 lg:right-1/2"
            >
              <div className="ring-1 ring-black ring-opacity-5 overflow-hidden  rounded-3xl">
                <div
                  style={{ width: 180 }}
                  className="relative grid gap-6 bg-white px-2 py-2 sm:gap-4 sm:px-2 bg-gradient-to-r from-green-300 via-indigo-100 to-purple-700 border-black"
                >
                  {list_sub_menu?.map((item) =>
                    item.key ? (
                      <button
                        key={item.name}
                        className="flex focus:outline-none rounded-full items-start hover:bg-gradient-to-r from-yellow-400 via-red-300 to-pink-500 text-indigo-800"
                        onClick={() => _onChangeLang(item?.key)}
                      >
                        <div className="py-2 w-full flex justify-center">
                          <p className="text-lg font-medium hover:text-indigo-800 ">
                            {intl.formatMessage({ id: item.name })}
                          </p>
                        </div>
                      </button>
                    ) : (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="flex items-start rounded-full hover:bg-gradient-to-r from-yellow-400 via-red-500 to-pink-300 text-indigo-800"
                      >
                        <div className="py-2 w-full flex justify-center">
                          <p className="text-lg font-medium hover:text-indigo-800 ">
                            {intl.formatMessage({ id: item.name })}
                          </p>
                        </div>
                      </Link>
                    )
                  )}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

DropdownMenu.propTypes = {
  list_sub_menu: PropTypes.array,
  title: PropTypes.string,
  customButton: PropTypes.any,
};

export default DropdownMenu;

import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ArrowDownIcon, LangIcon } from "../../assets/icons";
import PropTypes from "prop-types";
import { useIntl, changeLocale } from "gatsby-plugin-react-intl";
import { Link } from "gatsby";

const DropdownMenuTest = (props) => {
  const { list_sub_menu, title } = props;
  const intl = useIntl();

  const _onChangeLang = (value) => {
    console.log(value);
    if (value === "en" || value === "vi") changeLocale(value, null);
  };

  return (
    <Menu as="div" key={title} className="relative text-left">
      {({ open }) => (
        <>
          {title === "EN" || title === "VI" ? (
            <div>
              <Menu.Button
                className={
                  open
                    ? "text-general-primary-d focus:outline-none cursor-pointe inline-flex items-center text-base font-medium"
                    : "text-custom-text-black focus:outline-none cursor-pointe inline-flex items-center text-base font-medium hover:text-general-primary-d"
                }
              >
                <LangIcon className="w-5 h-5 mr-1" />
                <span>{title}</span>
              </Menu.Button>
            </div>
          ) : (
            <div>
              <Menu.Button
                className={
                  open
                    ? "text-general-primary-d focus:outline-none cursor-pointe inline-flex items-center text-base font-medium"
                    : "text-custom-text-black focus:outline-none cursor-pointe inline-flex items-center text-base font-medium hover:text-general-primary-d"
                }
              >
                <span>{title}</span>
                <ArrowDownIcon className="w-5 h-5" />
              </Menu.Button>
            </div>
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
            <Menu.Items
              static
              className="absolute z-10 -ml-4 mt-3 transform px-2 w-auto max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
            >
              <div className="ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div
                  style={{ width: 180 }}
                  className="relative grid gap-6 bg-white px-2 py-2 sm:gap-8 sm:px-2"
                >
                  {list_sub_menu?.map((item) =>
                    item.key ? (
                      <button
                        key={item.name}
                        className="flex focus:outline-none items-start rounded-lg hover:bg-gray-50"
                        onClick={() => _onChangeLang(item?.key)}
                      >
                        <div className="py-2 w-full flex justify-center">
                          <p className="text-base font-light text-custom-text-black hover:text-general-primary-d">
                            {intl.formatMessage({ id: item.name })}
                          </p>
                        </div>
                      </button>
                    ) : (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <div className="py-2 w-full flex justify-center">
                          <p className="text-base font-light text-custom-text-black hover:text-general-primary-d">
                            {intl.formatMessage({ id: item.name })}
                          </p>
                        </div>
                      </Link>
                    )
                  )}
                </div>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

DropdownMenuTest.propTypes = {
  list_sub_menu: PropTypes.array,
  title: PropTypes.string,
  customButton: PropTypes.any,
};

export default DropdownMenuTest;

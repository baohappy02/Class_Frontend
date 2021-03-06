import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ArrowDownIcon, LangIcon } from "../../assets/icons";
import PropTypes from "prop-types";
import { useIntl, changeLocale } from "gatsby-plugin-react-intl";

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
                  ? "text-general-primary-d focus:outline-none cursor-pointe inline-flex items-center text-lg leading-4-5 font-semibold	"
                  : "text-custom-text-black focus:outline-none cursor-pointe inline-flex items-center text-lg leading-4-5 font-semibold	 hover:text-general-primary-d"
              }
            >
              <LangIcon className="w-5 h-5 mr-1" />
              <span>{title}</span>
            </Popover.Button>
          ) : (
            <Popover.Button
              className={
                open
                  ? "text-general-primary-d focus:outline-none cursor-pointe inline-flex items-center text-lg leading-4-5 font-semibold"
                  : "text-custom-text-black focus:outline-none cursor-pointe inline-flex items-center text-lg leading-4-5 font-semibold hover:text-general-primary-d"
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
                          <p className="text-lg font-light text-custom-text-black hover:text-general-primary-d">
                            {intl.formatMessage({ id: item.name })}
                          </p>
                        </div>
                      </button>
                    ) : (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <div className="py-2 w-full flex justify-center">
                          <p className="text-lg font-light text-custom-text-black hover:text-general-primary-d">
                            {intl.formatMessage({ id: item.name })}
                          </p>
                        </div>
                      </a>
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

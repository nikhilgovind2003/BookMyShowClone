import { Disclosure } from "@headlessui/react";
// import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
const PlaysFilter = (props) => {
  return (
    <Disclosure>
      {({ open }) => (
        /* Use the `open` state to conditionally change the direction of an icon. */
        <div className=" bg-white w-2/3 mb-4 p-3">
          <Disclosure.Button className=" flex items-center justify-between bg-white w-full">
            <div className=" flex items-center gap-3">

            {open ? <BiChevronUp /> : <BiChevronDown />}
            <span className={open? "text-red-600": "text-gray-600"}>{props.title}</span>
            </div>

            <span className=" text-gray-600 hover:text-red-500 text-sm">Clear</span>
          </Disclosure.Button>
          <Disclosure.Panel className="p-1 mt-2">
            <div className=" flex flex-wrap gap-3">
              {props.tags.map((tag) => (
                <div className=" border border-red-400 p-1">
                  <span className=" text-red-400 text-xs">{tag}</span>
                </div>
              ))}
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
};

export default PlaysFilter;

"use client";

import Image from "next/image";
import React, { useState } from "react";
import { CloseIcon, SearchIcon } from "./Icons";

import { AnimatePresence, motion } from "framer-motion";

export default function SearchBar() {
  const [propertyMenuIsOpen, setPropertyMenuIsOpen] = useState(false);

  // const onClosePropertyMenu = () => {
  //   setPropertyMenuIsOpen(false);
  // };

  return (
    <div className="relative">
      <div className="py-4">
        <div className="h-[56px] w-[680px] max-w-screen-lg flex items-center bg-black border-2 border-[#404245] rounded-lg overflow-hidden -skew-x-12">
          <input
            onChange={() => setPropertyMenuIsOpen(true)}
            type="text"
            name=""
            id=""
            className="grow h-full px-6 py-4 bg-transparent ring-0 outline-0 text-white skew-x-12"
            placeholder="Search..."
          />
          <button className="w-[84px] h-full pr-2 -mr-2 flex items-center justify-center bg-[#34363A] skew-x-12">
            <SearchIcon />
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>

      {/* Close button */}
      <AnimatePresence>
        {propertyMenuIsOpen && (
          <motion.button
            onClick={() => setPropertyMenuIsOpen(false)}
            className="absolute -right-14 top-4 w-[36px] h-[36px] aspect-square flex items-center justify-center bg-[#262626] rounded-full"
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 12, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <CloseIcon />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Search results */}
      <AnimatePresence>
        {propertyMenuIsOpen && (
          <motion.div
            className="absolute w-full space-y-4"
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 12, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-full min-h-[160px] flex items-center justify-center text-center bg-[#34363A] rounded-lg">
              <div className="">
                <h2 className="text-[20px] font-medium">Oops, no results found. </h2>
                <p className="text-[14px]">Try a new search or explore recommended topics</p>
              </div>
            </div>
            <div className="space-y-2">
              <h5>Recommended topics</h5>
              <div className="flex items-center gap-1">
                <div className="grow cursor-pointer">
                  <div className="p-3 flex items-center justify-center gap-2 border-2 border-[#404245] rounded-lg -skew-x-12">
                    <Image className="skew-x-12" src={"/icon/1.png"} width={32} height={32} alt="" />
                    <span className="font-semibold skew-x-12">Entertainment</span>
                  </div>
                </div>
                <div className="grow cursor-pointer">
                  <div className="p-3 flex items-center justify-center gap-2 border-2 border-[#404245] rounded-lg -skew-x-12">
                    <Image className="skew-x-12" src={"/icon/2.png"} width={32} height={32} alt="" />
                    <span className="font-semibold skew-x-12">Youtube</span>
                  </div>
                </div>
                <div className="grow cursor-pointer">
                  <div className="p-3 flex items-center justify-center gap-2 border-2 border-[#404245] rounded-lg -skew-x-12">
                    <Image className="skew-x-12" src={"/icon/3.png"} width={32} height={32} alt="" />
                    <span className="font-semibold skew-x-12">Business</span>
                  </div>
                </div>
                <div className="grow cursor-pointer">
                  <div className="p-3 flex items-center justify-center gap-2 border-2 border-[#404245] rounded-lg -skew-x-12">
                    <Image className="skew-x-12" src={"/icon/4.png"} width={32} height={32} alt="" />
                    <span className="font-semibold skew-x-12">Film Characters</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

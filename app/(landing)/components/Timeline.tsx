import React from "react";
import { Timeline } from "@/app/components/ui/timeline";
import { LinkPreview } from "@/app/components/ui/link-preview";

export function TimelinePreview() {
  const data = [
    {
      title: "Ongoing",
      content: (
        <div>
          <h3 className="text-xl font-bold text-white-600">
            Auro
          </h3>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Auro is a high-performance, hardware-backed music streaming platform designed for audiophiles. Built from the ground up with a native C backend and custom bash scripting for streamlined operation.
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              • Native C backend with ultra-low latency processing
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              • Bash-scripted system control and automation
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              • React Native mobile app for iOS and Android
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              • Full support for Roon, Spotify Connect, Tidal Connect, AirPlay, HQPlayer, and more
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              • Hardware-coupled for optimal audio fidelity
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/projects/auro/mobile.png"
              alt="mobile"
              width={500}
              height={500}
              loading="lazy"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/images/projects/auro/web.png"
              alt="web"
              width={500}
              height={500}
              loading="lazy"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2019 - 2024",
      content: (
        <div>
          <h3 className="text-xl font-bold text-white-600">
            <a
                  href="https://rizing.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-bold text-white-600 hover:underline"
                >
                  Rizing
            </a>
          </h3>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Developed modern, responsive SAP Fiori applications and dashboards for enterprise workflows across sales, warehouse, and finance, using Core Data Services (CDS), UI5, and OData integrations.
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              • Designed and extended SAP Fiori apps using custom and standard CDS views, improving real-time data access.
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              • Built reusable UI components adhering to Fiori guidelines to ensure accessibility, responsiveness, and design consistency.
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              • Integrated frontend apps with OData and REST APIs for seamless interoperability with external and internal systems.
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              • Created testable, maintainable frontend logic using QUnit and SAP Fiori tools, reducing regression errors during deployments.
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              • Engineered backend services using ABAP and CAP to enable modular, scalable business logic across modules.
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              • Developed and exposed OData services and custom APIs for real-time integration with SAP and non-SAP systems.
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              • Optimized data models and queries using CDS annotations and performance tuning, reducing load times.
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              • Implemented robust error handling, logging, and version control to ensure backend reliability and traceability.
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              • Collaborated with cross-functional teams to optimize user journeys, streamline business processes, and drive user adoption.
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/projects/rizing/dashboard.jpg"
              alt="dashboard"
              width={500}
              height={500}
              loading="lazy"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/images/projects/rizing/ui.png"
              alt="ui"
              width={500}
              height={500}
              loading="lazy"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2018",
      content: (
        <div>
          <h3 className="text-xl font-bold text-white-600">
            <a
                href="https://www.linkedin.com/company/virseis/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold text-white-600 hover:underline"
              >
                Virseis
            </a>
          </h3>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Developed accessible, user-friendly interfaces and dashboards using React, .NET, and Python for order tracking, supplier coordination, production planning, inventory management, and sales.
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              • Designed and built reusable, accessible, and interactive UI components, ensuring responsive designs.
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              • Developed native and cross platform mobile applications.
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              • Followed Agile methodologies, conducted retrospectives, and collaborated in sprints to improve project workflow and delivery.
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              • Created websites for customers using wordpress and laravel.
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/projects/virseis/travel-lanka-journeys.png"
              alt="dashboard"
              width={500}
              height={500}
              loading="lazy"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/images/projects/virseis/menu.jpg"
              alt="menu"
              width={500}
              height={500}
              loading="lazy"
              className="w-[120px] h-20 md:h-44 lg:h-60 rounded-xl object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"           
            />
            <img
              src="/images/projects/virseis/tlj-more.png"
              alt="more"
              width={500}
              height={500}
              loading="lazy"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/images/projects/virseis/shopping.jpg"
              alt="shopping"
              width={500}
              height={500}
              loading="lazy"
              className="w-[120px] h-20 md:h-44 lg:h-60 rounded-xl object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"           
            />
          </div>
        </div>
      ),
    },
    {
      title: "2017",
      content: (
        <div>
          <h3>
            <a
              href="/startrust/dashboard.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold text-white-600 hover:underline"
            >
              Startrust
            </a>
          </h3>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            A responsive frontend mockup of a modern online banking system, built entirely from scratch using HTML and CSS to demonstrate clean UI, accessibility, and structured navigation.
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              • Dashboard overview with recent activity
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              • Account creation form (Open Account)
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              • Transfer Funds interface with user feedback
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              • Payments and transaction history section
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              • Fully responsive layout for mobile and desktop with adaptive navbar and menu
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/projects/startrust/login.png"
              alt="login"
              width={500}
              height={500}
              loading="lazy"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/images/projects/startrust/dashboard.png"
              alt="dashboard"
              width={500}
              height={500}
              loading="lazy"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/images/projects/startrust/credit-cards.png"
              alt="credit-cards"
              width={500}
              height={500}
              loading="lazy"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/images/projects/startrust/menu.png"
              alt="menu"
              width={500}
              height={500}
              loading="lazy"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2016",
      content: (
        <div>
          <h3>            
            <a
              href="/ambros/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold text-white-600 hover:underline"
            >
              Ambros
            </a>
          </h3>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Responsive, Adaptive, Business, One-Page, HTML5, CSS3, JQuerry, Multi-Purpose, Fast
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Ambros is a unique one page layout which takes into consideration both style and function. With subtle animations and prominent CSS styling, 
            Ambros is a site that is versatile and functional. The code is easy to modify and can suit many needs well. Clear illustrations in the CSS are 
            given to make sure you always know what you're looking at.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/projects/ambros/ambros.png"
              alt="landing"
              width={500}
              height={500}
              loading="lazy"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/images/projects/ambros/ambros-about.png"
              alt="about"
              width={500}
              height={500}
              loading="lazy"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2015",
      content: (
        <div>
          <h3>
            <a
              href="/protoge/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold text-white-600 hover:underline"
            >
              Protogé
            </a>
          </h3>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Protoge is a web development startup I co-founded, focused on delivering modern, responsive websites tailored to client needs.
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              • Co-founded and operated a full-service web development startup
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              • Designed and developed the Protoge company website
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              • Delivered responsive static websites using modern HTML/CSS/JS stacks
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              • Built and customized WordPress sites to meet client requirements
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              • Served multiple clients across different industries
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/projects/protoge/protoge.png"
              alt="landing"
              width={500}
              height={500}
              loading="lazy"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/images/projects/protoge/services.png"
              alt="services"
              width={500}
              height={500}
              loading="lazy"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2014",
      content: (
        <div>
          <h3>            
            <a
              href="https://xdaforums.com/t/rom-kitkat-4-4-4-techfusion-v4.2776563/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold text-white-600 hover:underline"
            >
              TechFusion+
            </a>
          </h3>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            TechFusion+ is a fast, stylish, and versatile custom ROM that combines the best elements of Sony, OnePlus, and AOSP to deliver a unique and stable experience.
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              • Latest Xperia & OnePlus features integrated
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              • Theme enigine compatibility
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              • Updatable through custom recovery
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              • Includes Walkman, Album, Xperia apps, PlayStation Mobile
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              • Updated CM base and performance enhancements
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              • Responsive UI with improved sound and battery life
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/projects/techfusionplus/Screenshot_2014-07-13-00-45-59.jpg"
              alt="screenshot 1"
              width={500}
              height={500}
              loading="lazy"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/images/projects/techfusionplus/Screenshot_2014-07-13-00-43-53.png"
              alt="screenshot 2"
              width={500}
              height={500}
              loading="lazy"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/images/projects/techfusionplus/Screenshot_2014-07-13-00-44-05.png"
              alt="screenshot 3"
              width={500}
              height={500}
              loading="lazy"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/images/projects/techfusionplus/Screenshot_2014-07-08-17-18-06.png"
              alt="screenshot 4"
              width={500}
              height={500}
              loading="lazy"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}

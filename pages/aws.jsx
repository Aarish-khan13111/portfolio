import Image from "next/image";
import React, { useEffect } from "react";
import aws from "../public/assets/projects/aws.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";

const property = () => {
  return (
    <>
      <Head>
        <title>Aarish | AWS Cloud </title>
        <meta
          name="description"
          content="I’m a web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/assets/logo4.png" />
      </Head>
      <div className="w-full">
        <div className="w-screen h-[50vh] relative">
          <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
          <Image className="absolute z-1 object-cover" fill src={aws} alt="/" />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2" data-aos="fade-up">
              AWS Cloud Project
            </h2>
            <h3 data-aos="fade-up"> / AWS Services </h3>
          </div>
        </div>

        <div className="max-w-[1230px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
          <div className="col-span-4 " data-aos="fade-up">
            <p>Project</p>
            <h2 className="mb-2">Overview</h2>
            <p>
              In this project, we embarked on the journey of architecting and
              deploying a highly scalable and robust multi-tier application on
              Amazon Web Services (AWS). Our application is designed to handle a
              diverse range of services, employing a combination of technologies
              to deliver a seamless user experience.
            </p>
            <p
              className="uppercase mt-2 text-xl py-2 flex items-center tracking-widest text-[#D32222]"
              data-aos="zoom-in-up">
              <RiRadioButtonFill className="pr-2" />
              Application Architectural Overview
            </p>

            <p className="ml-4">
              Our multi-tier application, employing a combination of services to
              ensure high availability, scalability, and performance. Here's a
              short overview of architecture:
            </p>
            <p
              className="uppercase mt-2 ml-2 text-l tracking-widest text-[#D32222]"
              data-aos="zoom-in-up">
              * Load Balancer (Nginx)
            </p>
            <p className="ml-6">
              Incoming user requests are first received by the NGINX load
              balancer. NGINX distributes these requests evenly among the
              available web servers to ensure load balancing. This ensures high
              availability and performance by spreading the traffic load.
            </p>
            <p
              className="uppercase mt-2 ml-2 text-l tracking-widest text-[#D32222]"
              data-aos="zoom-in-up">
              * Web Servers (Apache)
            </p>
            <p className="ml-6">
              The web servers receive incoming requests from the load balancer.
              They are responsible for processing HTTP requests and serving web
              content to users. In this tier, your application logic is
              executed, handling tasks such as authentication, data retrieval,
              and processing. The web servers also interact with the next tier,
              the message broker, for background tasks and asynchronous
              processing.
            </p>
            <p
              className="uppercase mt-2 ml-2 text-l tracking-widest text-[#D32222]"
              data-aos="zoom-in-up">
              * Message Broker (RabbitMQ)
            </p>
            <p className="ml-6">
              RabbitMQ is used for asynchronous communication and task queuing.
              If your web servers need to perform tasks that are time-consuming
              or can be executed in the background (e.g., sending emails,
              processing large data, or managing workflows), they can send
              messages to RabbitMQ queues. These messages are then picked up by
              worker processes to execute the tasks, ensuring scalability and
              responsiveness
            </p>
            <p
              className="uppercase mt-2 ml-2 text-l tracking-widest text-[#D32222]"
              data-aos="zoom-in-up">
              * Database Server (MySQL)
            </p>
            <p className="ml-6">
              When the web servers require or update data, they interact with
              the MySQL database server. This database server stores and manages
              your application's data, including user information, content, and
              any other information your application relies on. It's crucial for
              maintaining the persistence and integrity of your data.
            </p>

            <p
              className="uppercase mt-2 ml-2 text-l tracking-widest text-[#D32222]"
              data-aos="zoom-in-up">
              * Application Flow Of Executation
            </p>
            <div
              className="my-4 flex justify-center hover:scale-105 ease-in duration-300"
              data-aos="zoom-in-up">
              <Image
                src="/assets/projects/app-arc.png"
                height="100"
                width="550"
                className="rounded-xl object-fill w-[50rem] "
                alt="/"
              />
            </div>

            <p className="ml-4">
              In summary, the flow of execution in your multi-tier AWS-hosted
              application starts with the load balancer distributing incoming
              requests to the web servers. The web servers handle application
              logic and can delegate time-consuming tasks to the RabbitMQ
              message broker for asynchronous processing. Finally, data is
              retrieved or stored in the MySQL database server, ensuring the
              high availability, scalability, and performance of your
              application.
            </p>

            <p
              className="uppercase mt-2 text-xl py-2 flex items-center tracking-widest text-[#D32222]"
              data-aos="zoom-in-up">
              <RiRadioButtonFill className="pr-2" />
              AWS Architectural Overview
            </p>
            <p className="ml-4">
              Creating an AWS architecture to host your multi-tier application
              involves deploying various AWS services to ensure scalability,
              availability, and security. Here's a short overview of an
              AWS-based architecture for your application:
            </p>
            <p
              className="uppercase mt-2 ml-2 text-l tracking-widest text-[#D32222]"
              data-aos="zoom-in-up">
              * EC2 Instances (Virtual Servers)
            </p>
            <p className="mt-2 ml-4">
              These are your Elastic Compute Cloud (EC2) instances. They host
              your application components such as Apache, RabbitMQ, and any
              other software required. You can configure these instances for
              optimal performance and scale them as needed to handle traffic
              spikes.
            </p>
            <p
              className="uppercase mt-2 ml-2 text-l tracking-widest text-[#D32222]"
              data-aos="zoom-in-up">
              * Security Groups
            </p>
            <p className="mt-2 ml-4">
              Security groups act as virtual firewalls for your EC2 instances.
              They define inbound and outbound traffic rules, ensuring that only
              authorized traffic can access your instances. For example, you
              might allow HTTP traffic (port 80) to your web servers but
              restrict SSH access (port 22) to trusted IP addresses.
            </p>
            <p
              className="uppercase mt-2 ml-2 text-l tracking-widest text-[#D32222]"
              data-aos="zoom-in-up">
              * ELB - Elastic Load Balancer
            </p>
            <p className="mt-2 ml-4">
              The Elastic Load Balancer distributes incoming traffic across
              multiple EC2 instances. It helps ensure high availability, load
              balancing, and fault tolerance for your application. When one
              instance fails or becomes overloaded, ELB automatically routes
              traffic to healthy instances.
            </p>
            <p
              className="uppercase mt-2 ml-2 text-l tracking-widest text-[#D32222]"
              data-aos="zoom-in-up">
              * Autoscaling
            </p>
            <p className="mt-2 ml-4">
              Auto Scaling allows your application to automatically adjust the
              number of EC2 instances based on predefined scaling policies. It
              ensures your application can handle varying levels of traffic
              efficiently. You can set up scaling triggers to add or remove
              instances as needed, reducing costs during low-traffic periods.
            </p>
            <p
              className="uppercase mt-2 ml-2 text-l tracking-widest text-[#D32222]"
              data-aos="zoom-in-up">
              * EFS / S3
            </p>
            <p className="mt-2 ml-4">
              These are storage solutions. S3 is object storage for static
              files, like images and other assets, and can be used for backups.
              EFS, on the other hand, provides scalable, shared file storage for
              your EC2 instances. It's suitable for sharing files and
              configurations between instances, which can be especially useful
              for your multi-tier application.
            </p>
            <p
              className="uppercase mt-2 ml-2 text-l tracking-widest text-[#D32222]"
              data-aos="zoom-in-up">
              * Route 53 (DNS Service)
            </p>
            <p className="mt-2 ml-4">
              Route 53 is Amazon's scalable and highly available Domain Name
              System (DNS) web service. It routes traffic to your application by
              resolving domain names to the appropriate ELB or EC2 instance. It
              can also provide health checks to route traffic away from
              unhealthy instances.
            </p>
            <p className="mt-2">
              By combining these components, you've built a robust and scalable
              architecture for your multi-tier application on AWS. It can handle
              increased loads, adapt to changing traffic patterns, and ensure
              high availability and fault tolerance. Additionally, AWS's
              infrastructure provides the flexibility and scalability needed to
              grow your application as your user base expands.
            </p>
            <p
              className="uppercase mt-2 text-xl py-2 flex items-center tracking-widest text-[#D32222]"
              data-aos="zoom-in-up">
              <RiRadioButtonFill className="pr-2" />
              AWS Flow of Executation
            </p>
            <div
              className="my-4 flex justify-center hover:scale-105 ease-in duration-300"
              data-aos="zoom-in-up">
              <Image
                src="/assets/projects/aws-arc.png"
                height="100"
                width="550"
                className="rounded-xl object-fill w-[50rem] "
                alt="/"
              />
            </div>

            <p
              className="uppercase mt-2 ml-2 text-l tracking-widest text-[#D32222]"
              data-aos="zoom-in-up">
              * Create Key Pairs
            </p>
            <p className="ml-6">
              Key pairs are used for secure SSH access to your EC2 instances.
              You generate a key pair, keep the private key secure, and use the
              public key to authenticate and access your instances.
            </p>
            <p
              className="uppercase mt-2 ml-2 text-l tracking-widest text-[#D32222]"
              data-aos="zoom-in-up">
              * Create Security Groups
            </p>
            <p className="ml-6">
              Security groups are like virtual firewalls for your AWS resources.
              Creating separate security groups for ELB, Tomcat instances, and
              databases (RabbitMQ, Memcache, MySQL) allows you to control
              inbound and outbound traffic access, ensuring security and proper
              communication between different components
            </p>
            <p
              className="uppercase mt-2 ml-2 text-l tracking-widest text-[#D32222]"
              data-aos="zoom-in-up">
              * Launch Instances for User Data:
            </p>
            <p className="ml-6">
              You launch EC2 instances for your application, configuring user
              data scripts to run on instance launch. These scripts can set up
              the environment and install necessary software, making instance
              provisioning automated and consistent.
            </p>
            <p
              className="uppercase mt-2 ml-2 text-l tracking-widest text-[#D32222]"
              data-aos="zoom-in-up">
              * Update IP to Name Mapping in Route 53
            </p>
            <p className="ml-6">
              Route 53 is Amazon's DNS service. Updating IP to name mapping
              involves creating DNS records, such as A or CNAME records, to
              associate friendly domain names with the IP addresses of your
              application components, making them accessible via human-readable
              URLs.
            </p>
            <p
              className="uppercase mt-2 ml-2 text-l tracking-widest text-[#D32222]"
              data-aos="zoom-in-up">
              * Build Application from Source Code:
            </p>
            <p className="ml-6">
              You compile or build your application from its source code,
              preparing it for deployment. This step ensures that your
              application is in a deployable state.
            </p>
            <p
              className="uppercase mt-2 ml-2 text-l tracking-widest text-[#D32222]"
              data-aos="zoom-in-up">
              * Upload to S3 Bucket
            </p>
            <p className="ml-6">
              Amazon S3 is a scalable object storage service. Uploading your
              application artifacts to an S3 bucket makes them easily accessible
              to other AWS services and instances, ensuring efficient deployment
              and distribution.
            </p>
            <p
              className="uppercase mt-2 ml-2 text-l tracking-widest text-[#D32222]"
              data-aos="zoom-in-up">
              * Download Artifact to Tomcat Instance:
            </p>
            <p className="ml-6">
              After uploading your application to S3, you download the
              application artifact to your Tomcat instances. This step makes the
              application available on the instances, where it can be deployed
              and run.
            </p>
            <p
              className="uppercase mt-2 ml-2 text-l tracking-widest text-[#D32222]"
              data-aos="zoom-in-up">
              * Setup ELB for HTTP:
            </p>
            <p className="ml-6">
              Elastic Load Balancer (ELB) is used to distribute incoming traffic
              across multiple instances. Configuring ELB for HTTP involves
              setting up listener rules, health checks, and routing, ensuring
              that traffic is evenly distributed to your Tomcat instances.
            </p>
            <p
              className="uppercase mt-2 ml-2 text-l tracking-widest text-[#D32222]"
              data-aos="zoom-in-up">
              * Build Auto Scaling Group for Tomcat Instances
            </p>
            <p className="ml-6">
              Auto Scaling allows your Tomcat instances to automatically adjust
              the number of running instances based on demand. By creating an
              Auto Scaling group, you ensure that your application can handle
              varying levels of traffic, maintaining high availability and
              scalability.
            </p>
            <p className="mt-2">
              Each of these steps plays a crucial role in setting up and
              deploying your application on AWS, from securing access to
              instances, managing traffic, and ensuring your application is
              accessible and scalable.
            </p>
            {/* <a
              href="https://github.com/Aarish-khan13111/social-media-app"
              target="_blank"
              rel="noreferrer">
              <button className="px-8 py-2 mt-4 mr-8">Code</button>
            </a> */}
            {/* {<a
            href="https://soptify-app-mak.vercel.app"
            target="_blank"
            rel="noreferrer">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>} */}
          </div>
          <div
            className="col-span-4 mb-6 md:col-span-1 md:h-[18rem] shadow-xl shadow-gray-300 rounded-xl py-4"
            data-aos="zoom-in-up">
            <div className="p-2">
              <p className="text-center font-bold pb-2">App Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> NGINX
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> APACHE
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> RABBITMQ
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> MYSQL
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> JAVA
                </p>
              </div>
            </div>
            <div
              className="my-12 md:col-span-1 md:h-[20rem] md:shadow-xl md:shadow-gray-400 md:rounded-xl py-4"
              data-aos="zoom-in-up">
              <div className="p-2">
                <p className="text-center font-bold pb-2">AWS Services</p>
                <div className="grid grid-cols-3 md:grid-cols-1">
                  <p className="text-gray-600 py-2 flex items-center">
                    <RiRadioButtonFill className="pr-1" /> EC2 Instances
                  </p>
                  <p className="text-gray-600 py-2 flex items-center">
                    <RiRadioButtonFill className="pr-1" /> ELB Load Blancer
                  </p>
                  <p className="text-gray-600 py-2 flex items-center">
                    <RiRadioButtonFill className="pr-1" /> Auto-Scaling
                  </p>
                  <p className="text-gray-600 py-2 flex items-center">
                    <RiRadioButtonFill className="pr-1" /> S3
                  </p>
                  <p className="text-gray-600 py-2 flex items-center">
                    <RiRadioButtonFill className="pr-1" /> Route 53
                  </p>
                  <p className="text-gray-600 py-2 flex items-center">
                    <RiRadioButtonFill className="pr-1" /> Security Groups
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Link href="/#projects">
            <p className="underline cursor-pointer">Back</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default property;

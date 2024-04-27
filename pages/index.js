import config from "@config/config.json";
import Base from "@layouts/Baseof";
import Cta from "@layouts/components/Cta";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import pic1 from "../public/images/blog-1.jpg"
import Link from "next/link";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { getListPage } from "../lib/contentParser";

import { useEffect, useRef, useState } from "react";

const Home = ({ frontmatter }) => {
  const { banner, feature, services, workflow, call_to_action } = frontmatter;
  const { title } = config.site;

  return (
    <Base title={title}>
      {/* Banner */}
      {/* <section className="section pb-[50px]">
        <div className="container">
          <div className="row text-center">
            <div className="mx-auto lg:col-10">
              <h1 className="font-primary font-bold" style={{fontSize:"64px"}}>{banner.title}</h1>
              <p className="mt-4" style={{fontSize:"18px"}}>{markdownify(banner.content)}</p>
              {banner.button.enable && (
                <Link
                  className="btn btn-primary mt-4"
                  href={banner.button.link}
                  rel={banner.button.rel}
                >
                  {banner.button.label}
                </Link>
              )}
              <Image
                className="mx-auto mt-12"
                src={banner.image}
                width={750}
                height={390}
                alt="banner image"
                priority
              />
            </div>
          </div>
        </div>
      </section> */}
      {/* Features */}
 
      {/* services */}
      {/* {services.map((service, index) => {
  const isOdd = index % 2 > 0;
  return (
    <section
      key={`service-${index}`}
      className={`section ${isOdd && "bg-theme-light"}`}
    >
      <div className="container">
        <div className="items-center gap-8 md:grid md:grid-cols-2">
    
          <div className={`service-carousel ${!isOdd && "md:order-2"}`}>
            <Swiper
              modules={[Autoplay, Pagination]}
              pagination={
                service.images.length > 1 ? { clickable: true } : false
              }
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              init={service?.images > 1 ? false : true}
            >

              {service?.images.map((slide, index) => (
                <SwiperSlide key={index}>
                  <Image src={slide} alt="" width={600} height={500} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>


          <div
            className={`service-content mt-5 md:mt-0 ${
              !isOdd && "md:order-1"
            }`}
          >
            <h2 className="font-bold leading-[40px]">{service?.title}</h2>
            <p className="mt-4 mb-2">{service?.content}</p>
            {service.button.enable && (
              <Link
                href={service?.button.link}
                className="cta-link inline-flex items-center text-primary"
              >
                {service?.button.label}
                <Image
                  className="ml-1"
                  src="/images/arrow-right.svg"
                  width={18}
                  height={14}
                  alt="arrow"
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
})} */}
<div className=" flex flex-col md:flex-row items-center md:items-start" style={{ justifyContent:"space-around"}}>
<div style={{marginTop:"0px",display:"flex" , flexDirection:"column" , justifyContent:"center" , height:"100vh"}}>
<div style={{marginBottom:"80px"}}>
<h2 className="font-bold leading-[40px] text-center md:text-start" style={{width:"98%",maxWidth:"350px", fontSize:"35px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            <p className="mt-4 mb-2 text-center md:text-start" style={{width:"98%", maxWidth:"400px" , marginTop:"20px"}}>orem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae lorem nec urna faucibus bibendum. Nam scelerisque, orci ac vehicula malesuada, justo elit blandit velit, nec gravida risus </p>
    <div className="flex flex-row justify-center md:justify-start" style={{marginTop:"20px"}}> 
    <button style={{background:"rgb(10 168 167 / var(--tw-text-opacity))" , color:"white", borderRadius:"15px" , paddingInline:"45px", paddingBlock:"20px"}}>
        همکاری با ما        
        </button>
        <button style={{color:"rgb(10 168 167 / var(--tw-text-opacity))" , background:"white", borderRadius:"15px" , paddingInline:"45px", paddingBlock:"20px"}}>
        همکاری با ما        
        </button>
        </div>
</div>
<div>
<div style={{width:"100%" , height:"0.05px" , background:"black" , marginBottom:"10px"}}></div>
 
  <div className="flex flex-col md:flex-row  mb-10 md:mb-0" style={{justifyContent:"space-between"}}>
    <p className="font-bold leading-[40px] text-center md:text-start" style={{fontSize:"25px"}} >
      محصولات پرطرفدار
    </p>
    <div>
      <div className="flex flex-col md:flex-row pr-0 md:pr-16" style={{ marginBottom:"20px"}}>
      <button className="mx-5" style={{color:"white"  , background:"#1C1678", borderRadius:"15px" , paddingInline:"45px", paddingBlock:"20px"}}>
        همکاری با ما        
        </button>
        <button className="mx-5 md:mx-0 mt-5 md:mt-0" style={{color:"white" , background:"#7BC9FF", borderRadius:"15px" , paddingInline:"45px", paddingBlock:"20px"}}>
        همکاری با ما        
        </button>
      </div>
      <div className="flex flex-col md:flex-row" >
      <button className=" mx-5" style={{color:"snow" , background:"#A3FFD6", borderRadius:"15px" , paddingInline:"45px", paddingBlock:"20px"}}>
        همکاری با ما        
        </button>
        <button className="mx-5 md:mx-0 mt-5 md:mt-0" style={{color:"white" , background:"#8576FF", borderRadius:"15px" , paddingInline:"45px", paddingBlock:"20px"}}>
        همکاری با ما        
        </button>
      </div>
    </div>
  </div>
</div>
  

  </div>
  <div style={{display:"flex" , flexDirection:"column" , justifyContent:"flex-start" , alignItems:"center"}}>
    <Image style={{width:"90%", maxWidth:"600px" , height:"350px" ,  borderRadius:"13px",  border:"black solid 3px"}} src={pic1} />
    <div className=" justify-around md:justify-between" style={{display:"flex" , flexDirection:"row" , alignItems:"center" , width:"100%", maxWidth:"600px" , margin:"10px"}}>
    <Image style={{ width:"48%", maxWidth:"290px" , height:"400px" , borderRadius:"13px" , border:"black solid 3px"}} src={pic1} />
    <Image style={{width:"48%",maxWidth:"290px" , height:"400px" , borderRadius:"13px" , border:"black solid 3px"}}    src={pic1}/>
    </div>
  </div>
</div>
<div id="cloud_body">
<div className="section" style={{background:" rgb(10 168 167 / var(--tw-text-opacity))"}}>
        <div className="container">
          <div className="text-center">
            <h2 style={{color:"white"}}>{markdownify(feature.title)}</h2>
          </div>
          <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {feature.features.map((item, i) => (
              <div
                className="feature-card rounded-xl p-5 pb-8 text-center bg-white"
                key={`feature-${i}`}
              >
                {item.icon && (
                  <Image
                    className="mx-auto"
                    src={item.icon}
                    width={30}
                    height={30}
                    alt=""
                  />
                )}
                <div className="mt-4">
                  {markdownify(item.name, "h3", "h5")}
                  <p className="mt-3">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="background-wrap">
    <div class="x1">
        <div class="cloud"></div>
    </div>
    <div class="x2">
        <div class="cloud"></div>
    </div>
    {/* <div class="x3">
        <div class="cloud"></div>
    </div>

    <div class="x4">
        <div class="cloud"></div>
    </div>

    <div class="x5">
        <div class="cloud"></div>
    </div> */}
</div>
 {/* <div className="row text-center" style={{position:"absolute", top:"50%", left:"30%", width:"700px", color:"snow" , zIndex:"0"}}>
            <div className="mx-auto lg:col-10">
              <h1 className="font-primary font-bold" style={{fontSize:"64px", zIndex:"-2" , color:"snow"}}>{banner.title}</h1>
              <p className="mt-4" style={{fontSize:"18px"}}>{markdownify(banner.content)}</p>
      </div>
      </div> */}
      </div>

      {/* workflow */}
      <section className="section pb-0">
        {/* <div className="mb-8 text-center">
          <div>
            <p>حهت دریافت مشاوره</p>
      <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        Full Name
      </label>
    </div>
    <div class="md:  w-1/12">
      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe"/>
    </div>
          </div>
        </div> */}
        <Image
          src={workflow.image}
          alt="workflow image"
          width={1920}
          height={296}
        />
      </section>

      {/* Cta */}
      {/* <Cta cta={call_to_action} /> */}
    </Base>
  );
};

export const getStaticProps = async () => {
  const homePage = await getListPage("content/_index.md");
  const { frontmatter } = homePage;
  return {
    props: {
      frontmatter,
    },
  };
};

export default Home;

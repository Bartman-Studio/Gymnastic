import { Flex, Text, Image } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([Autoplay]);

export const Welcome = (): any => {
  return (
    <Flex gap="60px" direction="column">
      <Header
        name="João"
        text="Encontre aqui as facilidades da sua rotina de treino"
        images={["/welcome_1.png", "/welcome_2.png"]}
      />
      <ShortCuts
        shortcuts={[
          {
            name: "Bem-vindo",
            onClick: () => console.log("Bem-vindo"),
            icon: <i className="fa-solid fa-door-open fa-xl"></i>,
            active: true,
          },
          {
            name: "Quiz",
            onClick: () => console.log("Quiz"),
            icon: <i className="fa-solid fa-vial fa-xl"></i>,
            active: false,
          },
          {
            name: "Termos",
            onClick: () => console.log("Termos"),
            icon: <i className="fa-solid fa-file-contract fa-xl"></i>,
            active: false,
          },
        ]}
      />
      <Links
        active={false}
        links={[
          {
            name: "Perfil",
            url: "/profile",
            icon: <i className="fa-solid fa-user fa-xl"></i>,
          },
          {
            name: "Treinos",
            url: "/trainings",
            icon: <i className="fa-solid fa-dumbbell fa-xl"></i>,
          },
          {
            name: "Dieta",
            url: "/diet",
            icon: <i className="fa-solid fa-apple-alt fa-xl"></i>,
          },
        ]}
      />
      <OtherServices />
    </Flex>
  );
};

interface iHeader {
  name: string;
  text: string;
  images: string[];
}

const Header = ({ name, text, images }: iHeader) => {
  return (
    <Flex p="80px 30px 0" gap="12px">
      <Flex direction="column" gap="8px" w="100%">
        <Text
          fontFamily="Inter"
          fontSize="14px"
          lineHeight="19px"
          fontWeight="400"
        >
          Olá, {name}
        </Text>
        <Text
          fontFamily="Inter"
          fontSize="24px"
          lineHeight="36px"
          fontWeight="700"
        >
          {text}
        </Text>
      </Flex>
      <HeaderCarousel images={images} />
    </Flex>
  );
};

interface iCarousel {
  images: string[];
}

const HeaderCarousel = ({ images }: iCarousel) => {
  return (
    <Swiper
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
        delay: 6500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      slidesPerView={1}
      spaceBetween={10}
      loop={true}
      style={{
        width: "100%",
      }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image src={image} alt="image" margin="0 auto" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

interface iShortCuts {
  shortcuts: {
    active: boolean;
    name: string;
    onClick: () => void;
    icon: JSX.Element;
  }[];
}

const ShortCuts = ({ shortcuts }: iShortCuts) => {
  return (
    <Flex p="0 30px" direction="column" gap="16px">
      <Text
        fontFamily="Inter"
        fontSize="16px"
        lineHeight="22px"
        fontWeight="400"
      >
        Comece por aqui
      </Text>
      <Flex
        w="100%"
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        gap="16px"
      >
        {shortcuts.map((shortcut, index) => {
          const { icon, active, name, onClick } = shortcut;
          return (
            <Flex
              key={index}
              w="86px"
              direction="column"
              align="center"
              gap="8px"
              textAlign="center"
              cursor={active ? "pointer" : "not-allowed"}
              opacity={active ? 1 : 0.5}
              transition="all 0.2s ease-in-out"
              _hover={{
                transform: active ? "scale(1.05)" : "scale(1)",
              }}
              _active={{
                transform: active ? "scale(0.95)" : "scale(1)",
              }}
              onClick={() => {
                if (!active) return;
                onClick();
              }}
            >
              <Flex
                w="72px"
                h="72px"
                border="1px solid #B2B2B2"
                borderRadius="50%"
                justifyContent="center"
                alignItems="center"
              >
                {icon}
              </Flex>
              <Text
                fontFamily="Inter"
                fontSize="14px"
                lineHeight="19px"
                color="#0B0B1B"
                fontWeight="300"
              >
                {name}
              </Text>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};

interface iLinks {
  active: boolean;
  links: {
    name: string;
    url: string;
    icon: JSX.Element;
  }[];
}

const Links = ({ active, links }: iLinks) => {
  return (
    <Flex direction="column" gap="16px" opacity={active ? 1 : 0.5}>
      <Text
        p="0 30px"
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="700"
        lineHeight="24px"
      >
        O que você precisa hoje?
      </Text>
      <Swiper
        slidesPerView={2.1}
        spaceBetween={16}
        style={{
          width: "100%",
          padding: "0 30px",
          cursor: active ? "pointer" : "not-allowed",
        }}
      >
        {links.map((link, index) => {
          const { name, url, icon } = link;
          return (
            <SwiperSlide
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                width: "152px",
                height: "120px",
                padding: "16px",
                gap: "16px",
                color: "#F5F2F2",
                backgroundColor: "#0B0B1B",
                borderRadius: "8px",
              }}
            >
              <Flex h="24px" justify="center" align="center" w="fit-content">
                {icon}
              </Flex>
              <Text>{name}</Text>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Flex>
  );
};

const OtherServices = () => {
  return (
    <Flex
      bgColor="#F4F5F7"
      h="fit-content"
      p="24px"
      direction="column"
      gap="16px"
    >
      <Text
        maxW="270px"
        fontFamily="Inter"
        fontWeight="400"
        fontSize="16px"
        color="#231F20"
      >
        Conheça também outros dos nossos serviços
      </Text>
      <OtherServicesCarousel
        otherServices={[
          {
            name: "Câmeras de segurança",
            url: "https://www.google.com",
            icon: <></>,
          },
          {
            name: "Câmeras de segurança",
            url: "https://www.google.com",
            icon: <></>,
          },
          {
            name: "Câmeras de segurança",
            url: "https://www.google.com",
            icon: <></>,
          },
        ]}
      />
    </Flex>
  );
};

interface iOtherServicesCarousel {
  otherServices: {
    name: string;
    url: string;
    icon: JSX.Element;
  }[];
}

const OtherServicesCarousel = ({ otherServices }: iOtherServicesCarousel) => {
  return (
    <Swiper
      slidesPerView={2.1}
      spaceBetween={16}
      style={{
        width: "100%",
      }}
    >
      {otherServices.map((link, index) => {
        const { name, url, icon } = link;
        return (
          <SwiperSlide
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "148px",
              height: "106px",
              padding: "16px",
              gap: "10px",
              color: "#231F20",
              borderRadius: "8px",
              border: "1px solid #C6C8CC",
              cursor: "pointer",
            }}
          >
            <Flex h="24px" justify="center" align="center" w="fit-content">
              {icon}
            </Flex>
            <Text>{name}</Text>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

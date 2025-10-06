import { useRef, useState, useEffect } from "react";
import { User, Circle, Instagram, Mail, Home, Users, Image, MessageCircle, UsersRound } from "lucide-react";
import muhaScene from "@/assets/muha-scene.png";
import muhaLogo from "@/assets/muha-logo.png";
import ncfLogo from "@/assets/ncf-logo.png";
import trailerBanner from "@/assets/trailer-banner.png";
import muhaStill1 from "@/assets/muha-still-1.png";
import muhaStill2 from "@/assets/muha-still-2.png";
import muhaStill3 from "@/assets/muha-still-3.png";
import oliProfile from "@/assets/oli-profile.png";
import { useWinXP } from "../context/WinXPContext";
import { ProfileNotification } from "../components/ProfileNotification";

const MuhaFilm = () => {
  const { openApp } = useWinXP();
  const [showNotification, setShowNotification] = useState(false);
  const [hasShownNotification, setHasShownNotification] = useState(false);
  const oliCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hasShownNotification) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasShownNotification) {
            setShowNotification(true);
            setHasShownNotification(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (oliCardRef.current) {
      observer.observe(oliCardRef.current);
    }

    return () => {
      if (oliCardRef.current) {
        observer.unobserve(oliCardRef.current);
      }
    };
  }, [hasShownNotification]);

  return (
    <>
      <ProfileNotification
        show={showNotification}
        profileImage={oliProfile}
        username="x_oli_luv_x"
        message="Helloo!! :**"
        onDismiss={() => setShowNotification(false)}
      />
      <div className="h-full overflow-auto bg-white px-8 pt-8">
      {/* Watch Trailer Banner */}
      <section className="-mx-8 -mt-8">
        <button
          onClick={() => openApp("MediaPlayer")}
          className="w-full cursor-pointer overflow-hidden hover:brightness-110 transition-all duration-300 border-0 p-0 block"
        >
          <img 
            src={trailerBanner} 
            alt="Trailer Available Now - Click to Watch" 
            className="w-full block"
          />
        </button>
      </section>

      {/* Hero Image */}
      <section className="-mx-8">
        <img src={muhaStill2} alt="Scene from MUHA film" className="w-full h-[350px] object-cover block" />
      </section>

      {/* Header */}
      <div className="max-w-3xl mx-auto text-center pb-6 mt-16">
          <div className="flex justify-center mb-2">
            <img src={muhaLogo} alt="MUHA" className="h-16" />
          </div>
          <p
            className="text-2xl text-black"
            style={{
              fontFamily: '"Public Sans", sans-serif',
              fontWeight: 900,
            }}
          >
            (Fly)
          </p>
          <p
            className="text-lg mt-2 text-black"
            style={{
              fontFamily: '"Public Sans", sans-serif',
              fontWeight: 400,
            }}
          >
            By Slava Milanova
          </p>
      </div>

      {/* Synopsis */}
      <section className="mt-16">
        <h2
          className="text-2xl font-bold mb-6 pb-2 -mx-8 px-8"
          style={{
            color: "#000000",
            fontFamily: '"Public Sans", sans-serif',
            fontWeight: 900,
            borderBottom: "3px solid #FFD700",
          }}
        >
          SYNOPSIS
        </h2>
        
        {/* First section - text left, image right */}
        <div className="grid md:grid-cols-2 gap-8 mb-8 items-start -mx-8">
          <div className="space-y-3 text-base leading-relaxed px-8">
              <p>
                Set in rural Bulgaria in 2005, <em>MUHA</em> is a psychological drama about loneliness and the search for
                connection in the early days of social media.
              </p>
              <p>
                Ovanеs, a 30-year-old man living in isolation in a small village, works at the local butcher shop and
                spends his evenings waiting for his unreliable internet connection.
            </p>
          </div>
          <img src={muhaStill1} alt="Scene from MUHA film" className="w-full h-[300px] object-cover" />
        </div>
        
        {/* Second section - image left, text right */}
        <div className="grid md:grid-cols-2 gap-8 items-start -mx-8">
          <img src={muhaStill3} alt="Scene from MUHA film" className="w-full h-[300px] object-cover order-2 md:order-1" />
          <div className="space-y-3 text-base leading-relaxed px-8 order-1 md:order-2">
              <p>
                When he receives a friend request from Oli, a 21-year-old woman confined to her father's house, both find 
                solace in their online conversations—a rare window into something beyond their provincial lives.
              </p>
              <p>
                As their connection deepens through glowing computer screens and sporadic chat messages, Ovanеs suggests 
                they meet in person. But when the digital world collides with reality, the boundaries between longing and 
                obsession begin to blur.
          </p>
        </div>
      </div>
      </section>

      {/* Friends */}
      <section className="mt-16 -mx-8 px-8 py-12" style={{ background: "#E8EBF0" }}>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-6 mb-6 pb-3" style={{ borderBottom: "1px solid #D4D8DD" }}>
            <div className="flex items-center gap-2 px-3 py-2 rounded-md cursor-default">
              <Home className="w-5 h-5" style={{ color: "#6B7280" }} />
              <span className="text-sm font-medium" style={{ color: "#6B7280" }}>Home</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-md cursor-default" style={{ background: "#FFFFFF", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
              <Users className="w-5 h-5" style={{ color: "#4169E1" }} />
              <span className="text-sm font-semibold" style={{ color: "#2C2D2E" }}>Friends</span>
              <span
                className="text-xs font-medium px-2 py-0.5 rounded-full ml-1"
                style={{
                  background: "#D4D8DD",
                  color: "#2C2D2E",
                }}
              >
                2 Online
              </span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-md cursor-default">
              <Image className="w-5 h-5" style={{ color: "#6B7280" }} />
              <span className="text-sm font-medium" style={{ color: "#6B7280" }}>Photos</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-md cursor-default">
              <MessageCircle className="w-5 h-5" style={{ color: "#6B7280" }} />
              <span className="text-sm font-medium" style={{ color: "#6B7280" }}>Messages</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-md cursor-default">
              <UsersRound className="w-5 h-5" style={{ color: "#6B7280" }} />
              <span className="text-sm font-medium" style={{ color: "#6B7280" }}>Groups</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Ovanes */}
            <div className="rounded-lg overflow-hidden p-3" style={{ background: "linear-gradient(to bottom, #9CA3AF, #6B7280)" }}>
              <div className="bg-white rounded-lg overflow-hidden h-full" style={{ border: "1px solid #D4D8DD", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
                <div className="p-4">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 flex items-center justify-center h-48 mb-4">
                    <User className="w-24 h-24" style={{ color: "#9CA3AF" }} />
                  </div>
                  <div className="flex items-center gap-2 mb-3 pb-3" style={{ borderBottom: "1px solid #F3F4F6" }}>
                    <Circle className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
                    <span className="text-base font-semibold" style={{ color: "#2C2D2E" }}>Ovanes</span>
                    <span className="ml-auto text-blue-400 text-xl">♂</span>
                  </div>
                  <div className="space-y-1.5 text-sm" style={{ color: "#6B7280" }}>
                    <p>
                      <span className="font-medium" style={{ color: "#2C2D2E" }}>Location:</span> Near Radomir
                    </p>
                    <p>
                      <span className="font-medium" style={{ color: "#2C2D2E" }}>Name:</span> Ovanes
                    </p>
                    <p>
                      <span className="font-medium" style={{ color: "#2C2D2E" }}>Status:</span> Single
                    </p>
                    <p>
                      <span className="font-medium" style={{ color: "#2C2D2E" }}>Age:</span> 30
                    </p>
                    <p>
                      <span className="font-medium" style={{ color: "#2C2D2E" }}>Interests:</span> Internet, cars, travel
                    </p>
                    <p className="mt-3 pt-3 text-xs italic" style={{ borderTop: "1px solid #F3F4F6" }}>
                      Working at the butcher shop, dreaming of leaving the village
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Oli */}
            <div ref={oliCardRef} className="rounded-lg overflow-hidden p-3" style={{ background: "linear-gradient(to bottom, #FBC2EB, #F78CA0)" }}>
              <div className="bg-white rounded-lg overflow-hidden h-full" style={{ border: "1px solid #D4D8DD", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
                <div className="p-4">
                  <div className="rounded-lg overflow-hidden h-48 mb-4">
                    <img src={oliProfile} alt="Oli profile" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex items-center gap-2 mb-3 pb-3" style={{ borderBottom: "1px solid #F3F4F6" }}>
                    <Circle className="w-2.5 h-2.5 fill-green-500 text-green-500" />
                    <span className="text-base font-semibold" style={{ color: "#2C2D2E" }}>x_oli_luv_x</span>
                    <span className="ml-auto text-pink-400 text-xl">♀</span>
                  </div>
                  <div className="space-y-1.5 text-sm" style={{ color: "#6B7280" }}>
                    <p>
                      <span className="font-medium" style={{ color: "#2C2D2E" }}>Location:</span> Radomir
                    </p>
                    <p>
                      <span className="font-medium" style={{ color: "#2C2D2E" }}>Name:</span> Oli
                    </p>
                    <p>
                      <span className="font-medium" style={{ color: "#2C2D2E" }}>Status:</span> Single
                    </p>
                    <p>
                      <span className="font-medium" style={{ color: "#2C2D2E" }}>Age:</span> 21
                    </p>
                    <p>
                      <span className="font-medium" style={{ color: "#2C2D2E" }}>Interests:</span> Chatting, music
                    </p>
                    <p className="mt-3 pt-3 text-xs italic" style={{ borderTop: "1px solid #F3F4F6" }}>
                      Looking for cool people to chat with
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mayor */}
            <div className="rounded-lg overflow-hidden p-3" style={{ background: "linear-gradient(to bottom, #D1D5DB, #9CA3AF)" }}>
              <div className="bg-white rounded-lg overflow-hidden h-full" style={{ border: "1px solid #D4D8DD", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
                <div className="p-4">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 flex items-center justify-center h-48 mb-4">
                    <User className="w-24 h-24" style={{ color: "#9CA3AF" }} />
                  </div>
                  <div className="flex items-center gap-2 mb-3 pb-3" style={{ borderBottom: "1px solid #F3F4F6" }}>
                    <Circle className="w-2.5 h-2.5 fill-red-500 text-red-500" />
                    <span className="text-base font-semibold" style={{ color: "#2C2D2E" }}>kmeta_radomir</span>
                    <span className="ml-auto text-gray-400 text-xl">♂</span>
                  </div>
                  <div className="space-y-1.5 text-sm" style={{ color: "#6B7280" }}>
                    <p>
                      <span className="font-medium" style={{ color: "#2C2D2E" }}>Location:</span> Radomir
                    </p>
                    <p>
                      <span className="font-medium" style={{ color: "#2C2D2E" }}>Name:</span> The Mayor
                    </p>
                    <p>
                      <span className="font-medium" style={{ color: "#2C2D2E" }}>Status:</span> Widower
                    </p>
                    <p>
                      <span className="font-medium" style={{ color: "#2C2D2E" }}>Age:</span> 50
                    </p>
                    <p>
                      <span className="font-medium" style={{ color: "#2C2D2E" }}>Interests:</span> Control, order, authority
                    </p>
                    <p className="mt-3 pt-3 text-xs italic" style={{ borderTop: "1px solid #F3F4F6" }}>
                      Keeps the computer locked with a key hidden in a piggy bank
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Butcher */}
            <div className="rounded-lg overflow-hidden p-3" style={{ background: "linear-gradient(to bottom, #E5E7EB, #D1D5DB)" }}>
              <div className="bg-white rounded-lg overflow-hidden h-full" style={{ border: "1px solid #D4D8DD", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
                <div className="p-4">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 flex items-center justify-center h-48 mb-4">
                    <User className="w-24 h-24" style={{ color: "#9CA3AF" }} />
                  </div>
                  <div className="flex items-center gap-2 mb-3 pb-3" style={{ borderBottom: "1px solid #F3F4F6" }}>
                    <Circle className="w-2.5 h-2.5 fill-gray-400 text-gray-400" />
                    <span className="text-base font-semibold" style={{ color: "#2C2D2E" }}>mesarq</span>
                    <span className="ml-auto text-blue-400 text-xl">♂</span>
                  </div>
                  <div className="space-y-1.5 text-sm" style={{ color: "#6B7280" }}>
                    <p>
                      <span className="font-medium" style={{ color: "#2C2D2E" }}>Location:</span> Near Radomir
                    </p>
                    <p>
                      <span className="font-medium" style={{ color: "#2C2D2E" }}>Name:</span> The Butcher
                    </p>
                    <p>
                      <span className="font-medium" style={{ color: "#2C2D2E" }}>Status:</span> Married
                    </p>
                    <p>
                      <span className="font-medium" style={{ color: "#2C2D2E" }}>Age:</span> 45
                    </p>
                    <p>
                      <span className="font-medium" style={{ color: "#2C2D2E" }}>Interests:</span> Business, money
                    </p>
                    <p className="mt-3 pt-3 text-xs italic" style={{ borderTop: "1px solid #F3F4F6" }}>
                      Uses the office computer when the employee isn't watching
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credits */}
      <section className="mt-16">
        <h2
          className="text-2xl font-bold mb-6 pb-2 -mx-8 px-8"
          style={{
            color: "#000000",
            fontFamily: '"Public Sans", sans-serif',
            fontWeight: 900,
            borderBottom: "3px solid #FFD700",
          }}
        >
          CREDITS
        </h2>
          <div className="max-w-2xl mx-auto space-y-3">
            {/* Director/Writer */}
            <div className="grid grid-cols-2 gap-4 items-start">
              <div className="text-right text-gray-500 font-medium">Сценарист и режисьор</div>
              <div style={{ color: "#4169E1", fontWeight: 700 }}>Слава Миланова</div>
            </div>

            {/* Actors */}
            <div className="pt-6 space-y-3">
              <div className="grid grid-cols-2 gap-4 items-start">
                <div className="text-right text-gray-500 font-medium">Ованес</div>
                <div style={{ color: "#4169E1", fontWeight: 700 }}>Даниел Кукушев</div>
              </div>
              <div className="grid grid-cols-2 gap-4 items-start">
                <div className="text-right text-gray-500 font-medium">Оли</div>
                <div style={{ color: "#4169E1", fontWeight: 700 }}>Елеонора Иванова</div>
              </div>
              <div className="grid grid-cols-2 gap-4 items-start">
                <div className="text-right text-gray-500 font-medium">Кмета</div>
                <div style={{ color: "#4169E1", fontWeight: 700 }}>Свежен Младенов</div>
              </div>
              <div className="grid grid-cols-2 gap-4 items-start">
                <div className="text-right text-gray-500 font-medium">Месаря</div>
                <div style={{ color: "#4169E1", fontWeight: 700 }}>Стефан Денолюбов</div>
              </div>
              <div className="grid grid-cols-2 gap-4 items-start">
                <div className="text-right text-gray-500 font-medium">Масовка</div>
                <div style={{ color: "#4169E1", fontWeight: 700 }}>
                  <div>Сибела Чинарева</div>
                  <div>Георги Желев</div>
                </div>
              </div>
            </div>

            {/* Crew */}
            <div className="pt-6 space-y-3">
              <div className="grid grid-cols-2 gap-4 items-start">
                <div className="text-right text-gray-500 font-medium">Оператор</div>
                <div style={{ color: "#4169E1", fontWeight: 700 }}>Георги Гидиков</div>
              </div>
              <div className="grid grid-cols-2 gap-4 items-start">
                <div className="text-right text-gray-500 font-medium">Продуцент</div>
                <div style={{ color: "#4169E1", fontWeight: 700 }}>Ивана Каблешкова</div>
              </div>
              <div className="grid grid-cols-2 gap-4 items-start">
                <div className="text-right text-gray-500 font-medium">Първи асистент режисьор</div>
                <div style={{ color: "#4169E1", fontWeight: 700 }}>Асен Симеонов</div>
              </div>
              <div className="grid grid-cols-2 gap-4 items-start">
                <div className="text-right text-gray-500 font-medium">Втори асистент режисьор</div>
                <div style={{ color: "#4169E1", fontWeight: 700 }}>Александър Паунов</div>
              </div>
              <div className="grid grid-cols-2 gap-4 items-start">
                <div className="text-right text-gray-500 font-medium">Първи асистент камера</div>
                <div style={{ color: "#4169E1", fontWeight: 700 }}>Елица Стефанова</div>
              </div>
              <div className="grid grid-cols-2 gap-4 items-start">
                <div className="text-right text-gray-500 font-medium">Steady cam оператор</div>
                <div style={{ color: "#4169E1", fontWeight: 700 }}>Ерик Бассан</div>
              </div>
              <div className="grid grid-cols-2 gap-4 items-start">
                <div className="text-right text-gray-500 font-medium">Гафер</div>
                <div style={{ color: "#4169E1", fontWeight: 700 }}>Георги Гвоздев</div>
              </div>
              <div className="grid grid-cols-2 gap-4 items-start">
                <div className="text-right text-gray-500 font-medium">Осветител</div>
                <div style={{ color: "#4169E1", fontWeight: 700 }}>Петър Райжеков</div>
              </div>
              <div className="grid grid-cols-2 gap-4 items-start">
                <div className="text-right text-gray-500 font-medium">Осветител/втори асистент камера</div>
                <div style={{ color: "#4169E1", fontWeight: 700 }}>Валентина Николова</div>
              </div>
              <div className="grid grid-cols-2 gap-4 items-start">
                <div className="text-right text-gray-500 font-medium">Осветител/Грип</div>
                <div style={{ color: "#4169E1", fontWeight: 700 }}>Владо Вълков</div>
              </div>
              <div className="grid grid-cols-2 gap-4 items-start">
                <div className="text-right text-gray-500 font-medium">Звук</div>
                <div style={{ color: "#4169E1", fontWeight: 700 }}>
                  <div>Пресиан Димитров</div>
                  <div>Алекс Димитров</div>
                  <div>Тома Тодоров</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 items-start">
                <div className="text-right text-gray-500 font-medium">Скриптьор</div>
                <div style={{ color: "#4169E1", fontWeight: 700 }}>Габриела Пометкова</div>
              </div>
              <div className="grid grid-cols-2 gap-4 items-start">
                <div className="text-right text-gray-500 font-medium">Сценография</div>
                <div style={{ color: "#4169E1", fontWeight: 700 }}>
                  <div>Шани Илиева</div>
                  <div>Кардам Георгиев</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 items-start">
                <div className="text-right text-gray-500 font-medium">Грим и коса</div>
                <div style={{ color: "#4169E1", fontWeight: 700 }}>Деница Петрова-Божинова</div>
              </div>
              <div className="grid grid-cols-2 gap-4 items-start">
                <div className="text-right text-gray-500 font-medium">Гардероб на терен</div>
                <div style={{ color: "#4169E1", fontWeight: 700 }}>Валентина Георгиева</div>
              </div>
              <div className="grid grid-cols-2 gap-4 items-start">
                <div className="text-right text-gray-500 font-medium">Гардероб</div>
                <div style={{ color: "#4169E1", fontWeight: 700 }}>Борислав Стаменов</div>
              </div>
              <div className="grid grid-cols-2 gap-4 items-start">
                <div className="text-right text-gray-500 font-medium">PA & Грип</div>
                <div style={{ color: "#4169E1", fontWeight: 700 }}>Любен Краен</div>
              </div>
              <div className="grid grid-cols-2 gap-4 items-start">
                <div className="text-right text-gray-500 font-medium">Работа с животни</div>
                <div style={{ color: "#4169E1", fontWeight: 700 }}>Петко Лазаров</div>
              </div>
              <div className="grid grid-cols-2 gap-4 items-start">
                <div className="text-right text-gray-500 font-medium">Визуални ефекти</div>
                <div style={{ color: "#4169E1", fontWeight: 700 }}>Калина Александрова</div>
              </div>
              <div className="grid grid-cols-2 gap-4 items-start">
                <div className="text-right text-gray-500 font-medium">Счетоводител</div>
                <div style={{ color: "#4169E1", fontWeight: 700 }}>Наталия Нанчева</div>
              </div>
              <div className="grid grid-cols-2 gap-4 items-start">
                <div className="text-right text-gray-500 font-medium">Монтаж</div>
                <div style={{ color: "#4169E1", fontWeight: 700 }}>
                  <div>Габриела Пометкова</div>
                  <div>Никола Димов</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 items-start">
                <div className="text-right text-gray-500 font-medium">Цветове</div>
                <div style={{ color: "#4169E1", fontWeight: 700 }}>Никола Димов</div>
              </div>
              <div className="grid grid-cols-2 gap-4 items-start">
                <div className="text-right text-gray-500 font-medium">Музика</div>
                <div style={{ color: "#4169E1", fontWeight: 700 }}>Деян Славчев</div>
              </div>
              <div className="grid grid-cols-2 gap-4 items-start">
                <div className="text-right text-gray-500 font-medium">Лого и графичен дизайн</div>
                <div style={{ color: "#4169E1", fontWeight: 700 }}>Бояна Войнова</div>
              </div>
              <div className="grid grid-cols-2 gap-4 items-start">
                <div className="text-right text-gray-500 font-medium">Плакат и графичен дизайн</div>
                <div style={{ color: "#4169E1", fontWeight: 700 }}>Антония Данаилова</div>
              </div>
              <div className="grid grid-cols-2 gap-4 items-start">
                <div className="text-right text-gray-500 font-medium">Дизайн и разработка уебсайт</div>
                <div style={{ color: "#4169E1", fontWeight: 700 }}>Антон Харбуш</div>
              </div>
              <div className="grid grid-cols-2 gap-4 items-start">
                <div className="text-right text-gray-500 font-medium">Транспорт</div>
                <div style={{ color: "#4169E1", fontWeight: 700 }}>Лиа Манчева</div>
              </div>
              <div className="grid grid-cols-2 gap-4 items-start">
                <div className="text-right text-gray-500 font-medium">Транспорт мениджър</div>
                <div style={{ color: "#4169E1", fontWeight: 700 }}>Ахинора Каблешкова</div>
              </div>
          </div>
        </div>
      </section>

      {/* Special Thanks */}
      <section className="mt-16">
        <h2
          className="text-2xl font-bold mb-6 pb-2 -mx-8 px-8"
          style={{
            color: "#000000",
            fontFamily: '"Public Sans", sans-serif',
            fontWeight: 900,
            borderBottom: "3px solid #FFD700",
          }}
        >
          SPECIAL THANKS
        </h2>
        <div className="max-w-3xl mx-auto text-gray-700">
            К.Е.В.А., Месопродавница, Десислава Веселинова, Димитър Веселинов, Анжелика Симеонова, Антон Симеонов, Able
            Design, Стиван Чолаков, Стоян Лазаров, Чавдар Чушев, Панайот Горанов, Анна Иванова, Иван Иванов, Димитър
            Василев, Гергана Георгиева, Семейство Христови, Стефан Пенев, Любомира Чушева, Маргарита Василева, Валери
            Василев, Верослав Христов, Amann kaffe - Иван Джиджев, Александрина Андонова, Electricity Productions -
            Борил Петров, Reality Cam - Георги Гвоздев, "Парти Тент ЕООД" - Асен Кожаров, Лора Йосифова НИМХ, Столична
            община, район Младост, Столичен инспекторат - Ромина Митева, Петя Панайотова, Лидия Димитрова, Румяна
            Серафимова, Зоя Милванова, Магазин "Роден Дар" - Красина Ненкова, Силвана Миткова, Цветан Атанасов
        </div>
      </section>

      {/* Footer */}
      <div
        className="text-center text-sm text-gray-500 pt-6 -mx-8 px-8 mt-16"
        style={{
          borderTop: "3px solid #FFD700",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://www.instagram.com/muha.film/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-70 transition-opacity underline"
              style={{ color: "#4169E1" }}
            >
              <Instagram size={20} />
              <span>Instagram</span>
            </a>
            <a
              href="mailto:fly.short.25@gmail.com"
              className="flex items-center gap-2 hover:opacity-70 transition-opacity underline"
              style={{ color: "#4169E1" }}
            >
              <Mail size={20} />
              <span>Contact</span>
            </a>
          </div>
          <div className="mt-6 flex justify-center">
            <a
              href="https://ncf.bg/bg"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              <img src={ncfLogo} alt="National Culture Fund" className="h-32" />
            </a>
          </div>
          <p className="text-xs leading-relaxed max-w-2xl mx-auto mt-6">
            © 2025 Muha Film. This project incorporates material from{" "}
            <a
              href="https://github.com/ShizukuIchi/winXP"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              style={{ color: "#4169E1" }}
            >
              winXP project
            </a>{" "}
            (MIT License) by ShizukuIchi. This site is not affiliated with, endorsed by, or sponsored by Microsoft. All
            interface elements have been independently created or modified for artistic purposes. mIRC used with
            permission.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default MuhaFilm;

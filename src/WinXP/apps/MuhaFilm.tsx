import { User, Circle, Instagram, Mail } from "lucide-react";
import muhaScene from "@/assets/muha-scene.png";
import muhaLogo from "@/assets/muha-logo.png";
import ncfLogo from "@/assets/ncf-logo.png";
import trailerBanner from "@/assets/trailer-banner.png";
import muhaStill1 from "@/assets/muha-still-1.png";
import muhaStill2 from "@/assets/muha-still-2.png";
import muhaStill3 from "@/assets/muha-still-3.png";
import { useWinXP } from "../context/WinXPContext";

const MuhaFilm = () => {
  const { openApp } = useWinXP();

  return (
    <div className="h-full overflow-auto bg-white p-8 space-y-16">
      {/* Watch Trailer Banner */}
      <section className="max-w-3xl mx-auto">
        <button
            onClick={() => openApp("MediaPlayer")}
            className="w-full mb-4 cursor-pointer overflow-hidden hover:brightness-110 transition-all duration-300 border-0 p-0"
          >
            <img 
              src={trailerBanner} 
              alt="Trailer Available Now - Click to Watch" 
              className="w-full"
            />
          </button>
      </section>

      {/* Video Player */}
      <section className="max-w-3xl mx-auto">
        <img src={muhaStill2} alt="Scene from MUHA film" className="aspect-video w-full object-cover" />
      </section>

      {/* Header */}
      <div className="max-w-3xl mx-auto text-center pb-6">
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
      <section>
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
      <section>
        <div
          className="flex items-center justify-between mb-3 pb-2 -mx-8 px-8"
          style={{
            borderBottom: "3px solid #FFD700",
          }}
        >
            <h2
              className="text-2xl font-bold"
              style={{
                color: "#000000",
                fontFamily: '"Public Sans", sans-serif',
                fontWeight: 900,
              }}
            >
              FRIENDS
            </h2>
            <span
              className="text-sm font-semibold px-3 py-1 rounded-full"
              style={{
                background: "#FFD700",
                color: "#000000",
              }}
            >
              2 Online
          </span>
        </div>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Oli */}
            <div className="bg-gradient-to-b from-pink-300 to-pink-400 p-4 rounded-lg shadow-lg">
              <div className="bg-white rounded-lg p-3 mb-3 shadow-inner">
                <div className="bg-gray-100 border-4 border-white rounded-lg p-2 flex items-center justify-center h-64 shadow-lg">
                  <User className="w-32 h-32 text-gray-400" />
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-200">
                  <Circle className="w-3 h-3 fill-green-400 text-green-400" />
                  <span className="text-xl font-semibold text-gray-700">x_oli_luv_x</span>
                  <span className="ml-auto text-pink-400 text-2xl">♀</span>
                </div>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>
                    <span className="font-medium">Location:</span> Radomir
                  </p>
                  <p>
                    <span className="font-medium">Name:</span> Oli
                  </p>
                  <p>
                    <span className="font-medium">Status:</span> Single
                  </p>
                  <p>
                    <span className="font-medium">Age:</span> 21
                  </p>
                  <p>
                    <span className="font-medium">Interests:</span> Chatting, music
                  </p>
                  <p className="mt-2 pt-2 border-t border-gray-200 text-xs italic">
                    Looking for cool people to chat with
                  </p>
                </div>
              </div>
            </div>

            {/* Ovanes */}
            <div className="bg-gradient-to-b from-blue-300 to-blue-400 p-4 rounded-lg shadow-lg">
              <div className="bg-white rounded-lg p-3 mb-3 shadow-inner">
                <div className="bg-gray-100 border-4 border-white rounded-lg p-2 flex items-center justify-center h-64 shadow-lg">
                  <User className="w-32 h-32 text-gray-400" />
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-200">
                  <Circle className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xl font-semibold text-gray-700">Ovanes</span>
                  <span className="ml-auto text-blue-400 text-2xl">♂</span>
                </div>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>
                    <span className="font-medium">Location:</span> Near Radomir
                  </p>
                  <p>
                    <span className="font-medium">Name:</span> Ovanes
                  </p>
                  <p>
                    <span className="font-medium">Status:</span> Single
                  </p>
                  <p>
                    <span className="font-medium">Age:</span> 30
                  </p>
                  <p>
                    <span className="font-medium">Interests:</span> Internet, cars, travel
                  </p>
                  <p className="mt-2 pt-2 border-t border-gray-200 text-xs italic">
                    Working at the butcher shop, dreaming of leaving the village
                  </p>
                </div>
              </div>
            </div>

            {/* Mayor */}
            <div className="bg-gradient-to-b from-gray-300 to-gray-400 p-4 rounded-lg shadow-lg">
              <div className="bg-white rounded-lg p-3 mb-3 shadow-inner">
                <div className="bg-gray-100 border-4 border-white rounded-lg p-2 flex items-center justify-center h-64 shadow-lg">
                  <User className="w-32 h-32 text-gray-400" />
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-200">
                  <Circle className="w-3 h-3 fill-red-500 text-red-500" />
                  <span className="text-xl font-semibold text-gray-700">kmeta_radomir</span>
                  <span className="ml-auto text-gray-400 text-2xl">♂</span>
                </div>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>
                    <span className="font-medium">Location:</span> Radomir
                  </p>
                  <p>
                    <span className="font-medium">Name:</span> The Mayor
                  </p>
                  <p>
                    <span className="font-medium">Status:</span> Widower
                  </p>
                  <p>
                    <span className="font-medium">Age:</span> 50
                  </p>
                  <p>
                    <span className="font-medium">Interests:</span> Control, order, authority
                  </p>
                  <p className="mt-2 pt-2 border-t border-gray-200 text-xs italic">
                    Keeps the computer locked with a key hidden in a piggy bank
                  </p>
                </div>
              </div>
            </div>

            {/* Butcher */}
            <div className="bg-gradient-to-b from-red-300 to-red-400 p-4 rounded-lg shadow-lg">
              <div className="bg-white rounded-lg p-3 mb-3 shadow-inner">
                <div className="bg-gray-100 border-4 border-white rounded-lg p-2 flex items-center justify-center h-64 shadow-lg">
                  <User className="w-32 h-32 text-gray-400" />
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-200">
                  <Circle className="w-3 h-3 fill-gray-400 text-gray-400" />
                  <span className="text-xl font-semibold text-gray-700">mesarq</span>
                  <span className="ml-auto text-blue-400 text-2xl">♂</span>
                </div>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>
                    <span className="font-medium">Location:</span> Near Radomir
                  </p>
                  <p>
                    <span className="font-medium">Name:</span> The Butcher
                  </p>
                  <p>
                    <span className="font-medium">Status:</span> Married
                  </p>
                  <p>
                    <span className="font-medium">Age:</span> 45
                  </p>
                  <p>
                    <span className="font-medium">Interests:</span> Business, money
                  </p>
                  <p className="mt-2 pt-2 border-t border-gray-200 text-xs italic">
                    Uses the office computer when the employee isn't watching
                  </p>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* Credits */}
      <section>
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
      <section>
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
        className="text-center text-sm text-gray-500 pt-6 -mx-8 px-8"
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
  );
};

export default MuhaFilm;

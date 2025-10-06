import { User, Circle, Instagram, Mail } from "lucide-react";
import muhaScene from "@/assets/muha-scene.png";
import muhaLogo from "@/assets/muha-logo.png";
import ncfLogo from "@/assets/ncf-logo.png";
import { useWinXP } from "../context/WinXPContext";

const MuhaFilm = () => {
  const { openApp } = useWinXP();

  return (
    <div className="h-full overflow-auto bg-white p-8">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Watch Trailer Banner */}
        <section>
          <button
            onClick={() => openApp("MediaPlayer")}
            className="w-full mb-4 cursor-pointer overflow-hidden hover:brightness-110 transition-all duration-300"
            style={{
              background: "#FFD700",
            }}
          >
            <div className="py-8 px-4">
              <div className="text-center space-y-1">
                <div
                  className="uppercase"
                  style={{
                    fontSize: "2.5rem",
                    fontFamily: '"Public Sans", sans-serif',
                    fontWeight: 900,
                    fontStyle: "italic",
                    color: "#000000",
                  }}
                >
                  WATCH TRAILER NOW
                </div>
                <div
                  className="text-black text-sm"
                  style={{
                    fontFamily: '"Public Sans", sans-serif',
                    fontWeight: 700,
                  }}
                >
                  Click to Play
                </div>
              </div>
            </div>
          </button>
        </section>

        {/* Video Player */}
        <section>
          <img src={muhaScene} alt="Scene from MUHA film" className="aspect-video w-full object-cover" />
        </section>

        {/* Header */}
        <div className="text-center pb-6">
          <div className="flex justify-center mb-2">
            <img src={muhaLogo} alt="MUHA" className="h-16" />
          </div>
          <p 
            className="text-2xl text-black"
            style={{
              fontFamily: '"Public Sans", sans-serif',
              fontWeight: 900,
              fontStyle: "italic",
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
            className="text-2xl font-bold mb-3 pb-2"
            style={{
              color: "#000000",
              fontFamily: '"Public Sans", sans-serif',
              fontWeight: 900,
              fontStyle: "italic",
              borderBottom: "3px solid #FFD700",
            }}
          >
            SYNOPSIS
          </h2>
          <div className="space-y-3 text-base leading-relaxed">
            <p>
              Set in rural Bulgaria in 2005, <em>MUHA</em> is a psychological drama about loneliness and the search for
              connection in the early days of social media.
            </p>
            <p>
              Ovanеs, a 30-year-old man living in isolation in a small village, works at the local butcher shop and
              spends his evenings waiting for his unreliable internet connection. When he receives a friend request from
              Oli, a 21-year-old woman confined to her father's house, both find solace in their online conversations—a
              rare window into something beyond their provincial lives. As their connection deepens through glowing
              computer screens and sporadic chat messages, Ovanеs suggests they meet in person. But when the digital
              world collides with reality, the boundaries between longing and obsession begin to blur.
            </p>
            <p className="italic">
              <em>MUHA</em> is an intimate portrait of what happens when loneliness meets desperation in the flickering
              light of a computer monitor.
            </p>
          </div>
        </section>

        {/* Friends */}
        <section>
          <div
            className="flex items-center justify-between mb-3 pb-2"
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
                fontStyle: "italic",
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            className="text-2xl font-bold mb-6 pb-2"
            style={{
              color: "#000000",
              fontFamily: '"Public Sans", sans-serif',
              fontWeight: 900,
              fontStyle: "italic",
              borderBottom: "3px solid #FFD700",
            }}
          >
            КРЕДИТИ
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
                <div className="text-right text-gray-500 font-medium">Титри</div>
                <div style={{ color: "#4169E1", fontWeight: 700 }}>Бояна Войнова</div>
              </div>
              <div className="grid grid-cols-2 gap-4 items-start">
                <div className="text-right text-gray-500 font-medium">Плакат</div>
                <div style={{ color: "#4169E1", fontWeight: 700 }}>Антония Данаилова</div>
              </div>
              <div className="grid grid-cols-2 gap-4 items-start">
                <div className="text-right text-gray-500 font-medium">Сайт</div>
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
            className="text-2xl font-bold mb-6 pb-2"
            style={{
              color: "#000000",
              fontFamily: '"Public Sans", sans-serif',
              fontWeight: 900,
              fontStyle: "italic",
              borderBottom: "3px solid #FFD700",
            }}
          >
            СПЕЦИАЛНИ БЛАГОДАРНОСТИ НА
          </h2>
          <div className="space-y-2 text-gray-700">
            <div>Кева</div>
            <div>Месопродавница</div>
            <div>Десислава Веселинова</div>
            <div>Димитър Веселинов</div>
            <div>Анжелика Симеонова</div>
            <div>Антон Симеонов</div>
            <div>Able design</div>
            <div>Стиван Чолаков</div>
            <div>Стоян Лазаров</div>
            <div>Чавдар Чушев</div>
            <div>Панайот Горанов</div>
            <div>Анна Иванова</div>
            <div>Иван Иванов</div>
            <div>Димитър Василев</div>
            <div>Гергана Георгиева</div>
            <div>Семейство Христови</div>
            <div>Стефан Пенев</div>
            <div>Любомира Чушева</div>
            <div>Маргарита Василева</div>
            <div>Валери Василев</div>
            <div>Верослав Христов</div>
            <div>Amann kaffe - Иван Джиджев</div>
            <div>Александрина Андонова</div>
            <div>Electricity Productions - Борил Петров</div>
            <div>Reality Cam - Георги Гвоздев</div>
            <div>"Парти Тент ЕООД" - Асен Кожаров</div>
            <div>Лора Йосифова НИМХ</div>
            <div>Столична община, район Младост</div>
            <div>Столичен инспекторат - Ромина Митева, Петя Панайотова</div>
            <div>Лидия Димитрова</div>
            <div>Румяна Серафимова</div>
            <div>Зоя Милванова</div>
            <div>Магазин "Роден Дар" - Красина Ненкова, Силвана Миткова</div>
            <div>Цветан Атанасов</div>
          </div>
        </section>

        {/* Footer */}
        <div
          className="text-center text-sm text-gray-500 pt-6"
          style={{
            borderTop: "2px solid #FFD700",
          }}
        >
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
            © 2025 Muha Film. Built with <a href="https://github.com/ShizukuIchi/winXP" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#4169E1" }}>winXP project</a> (MIT License) by ShizukuIchi. 
            This site is not affiliated with, endorsed by, or sponsored by Microsoft. All interface elements have been independently created or modified for artistic purposes. mIRC used with permission.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MuhaFilm;

import Icon from "@/components/ui/icon";

const VALUES = [
  { icon: "Award", title: "Гарантия качества", desc: "Все товары проходят тщательную проверку перед отправкой. Только оригинальная продукция от проверенных брендов." },
  { icon: "Truck", title: "Быстрая доставка", desc: "Доставляем по всей России за 1–3 дня. Курьером, Почтой России или СДЭК — вы выбираете удобный способ." },
  { icon: "RotateCcw", title: "30 дней на возврат", desc: "Если товар не подошёл — без вопросов оформим возврат в течение 30 дней с момента получения." },
  { icon: "Shield", title: "Безопасная оплата", desc: "Все платежи защищены SSL-шифрованием. Принимаем карты, СБП и наличные при получении." },
  { icon: "Headphones", title: "Поддержка 24/7", desc: "Наша команда всегда на связи — звоните, пишите в чат или отправляйте письмо в любое время суток." },
  { icon: "Gift", title: "Программа лояльности", desc: "Накапливайте баллы с каждой покупки и обменивайте их на скидки. Постоянным клиентам — особые привилегии." },
];

const TEAM = [
  { name: "Анна Орлова", role: "Основатель & CEO", color: "from-purple-500 to-pink-500" },
  { name: "Кирилл Власов", role: "Директор по продукту", color: "from-cyan-500 to-blue-500" },
  { name: "Светлана Миронова", role: "Руководитель по доставке", color: "from-orange-500 to-red-500" },
];

export default function About() {
  return (
    <div className="grid-pattern">
      {/* Hero */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute top-10 left-1/2 w-96 h-96 rounded-full bg-purple-500/8 blur-3xl -translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="text-sm text-primary font-semibold mb-4 uppercase tracking-widest">О нас</div>
          <h1 className="font-oswald text-6xl sm:text-7xl font-bold text-foreground mb-6">
            МЫ СОЗДАЁМ <span className="gradient-text">БУДУЩЕЕ</span> ШОПИНГА
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Dr.Web — российский разработчик антивирусного ПО с 1992 года. Более 500 миллионов устройств по всему миру защищены нашими продуктами.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { num: "500 млн+", label: "Защищённых устройств" },
            { num: "25 лет", label: "На рынке" },
            { num: "190+", label: "Стран мира" },
            { num: "98%", label: "Обнаружение угроз" },
          ].map((s, i) => (
            <div key={i} className="gradient-border rounded-2xl p-6 text-center">
              <div className="font-oswald text-4xl font-bold gradient-text mb-2">{s.num}</div>
              <div className="text-muted-foreground text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-card/50 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-sm text-primary font-semibold mb-2 uppercase tracking-widest">Наши принципы</div>
            <h2 className="font-oswald text-4xl font-bold text-foreground">Почему выбирают нас</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-6 card-hover">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 neon-glow">
                  <Icon name={v.icon as "Award"} size={24} className="text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <div className="text-sm text-primary font-semibold mb-2 uppercase tracking-widest">Люди</div>
          <h2 className="font-oswald text-4xl font-bold text-foreground">Наша команда</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {TEAM.map((m, i) => (
            <div key={i} className="text-center">
              <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${m.color} flex items-center justify-center mx-auto mb-4 neon-glow`}>
                <Icon name="User" size={36} className="text-white" />
              </div>
              <div className="font-bold text-foreground">{m.name}</div>
              <div className="text-sm text-muted-foreground mt-1">{m.role}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
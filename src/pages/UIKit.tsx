import Button from "../components/Button";
import Input from "../components/Input";
import Card from "../components/Card";
import Alert from "../components/Alert";

export default function UIKit() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 p-8 space-y-12">
      <a
        href="#"
        className="inline-flex items-center text-sm font-medium text-blue-700 dark:text-blue-300 hover:underline"
      >
        ← Portfoye don
      </a>

      <button
        onClick={() => document.documentElement.classList.toggle("dark")}
        className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Tema degistir"
      >
        <span className="dark:hidden">&#9790;</span>
        <span className="hidden dark:inline">&#9728;</span>
      </button>

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        UI Kit
      </h1>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b pb-2">Button</h2>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
        <div className="flex flex-wrap items-end gap-3">
          <Button size="sm">Kucuk</Button>
          <Button size="md">Orta</Button>
          <Button size="lg">Buyuk</Button>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button
            variant="primary"
            disabled
            className="opacity-50 cursor-not-allowed pointer-events-none"
          >
            Disabled
          </Button>
        </div>
      </section>

      <section className="space-y-4 max-w-md">
        <h2 className="text-2xl font-semibold border-b pb-2">Inputs</h2>
        <Input id="ui-name" label="Normal Input" placeholder="Bir sey yazin..." />
        <Input
          id="ui-err"
          label="Hatali Input"
          error="Bu alan zorunludur"
        />
        <Input
          id="ui-help"
          label="Help Text"
          type="email"
          helpText="E-posta adresinizi girin"
        />
        <Input
          id="ui-dis"
          label="Disabled"
          disabled
          value="Duzenlenemez"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b pb-2">Cards</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card variant="elevated" title="Elevated Card">
            Golge ile yukseltilmis kart.
          </Card>
          <Card variant="outlined" title="Outlined Card">
            Cerceveli kart.
          </Card>
          <Card variant="filled" title="Filled Card">
            Dolgulu arka plan.
          </Card>
        </div>
      </section>

      <section className="space-y-4 max-w-xl">
        <h2 className="text-2xl font-semibold border-b pb-2">Alerts</h2>
        <Alert variant="info" title="Bilgi">
          Bilgilendirme mesaji.
        </Alert>
        <Alert variant="success" title="Basarili">
          Islem tamamlandi.
        </Alert>
        <Alert variant="warning" title="Uyari">
          Dikkat edilmesi gereken durum.
        </Alert>
        <Alert
          variant="error"
          title="Hata"
          dismissible
          onDismiss={() => console.log("kapatildi")}
        >
          Bir hata olustu.
        </Alert>
      </section>
    </div>
  );
}

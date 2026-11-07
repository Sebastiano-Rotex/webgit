export interface Step {
  title: string;
  short: string;
  details: string[];
}

export const steps: Step[] = [
  {
    title: "Primul contact",
    short: "Mă suni, îmi scrii un e-mail sau completezi formularul. Îmi spui pe scurt despre ce e vorba.",
    details: [
      "Mă poți contacta telefonic, prin e-mail sau prin formularul de pe site. Este suficient să-mi spui, în câteva rânduri, ce s-a întâmplat și ce termene ai primit, dacă există.",
      "Te rog să nu trimiți documente sau detalii confidențiale la acest pas. Le vom discuta direct, la întâlnire.",
      "Îți răspund în cel mai scurt timp posibil, în zilele lucrătoare, și stabilim împreună o dată pentru discuția inițială.",
    ],
  },
  {
    title: "Discuția inițială",
    short: "Ne întâlnim la birou sau online. Ascult situația, mă uit pe documente și îți explic opțiunile.",
    details: [
      "Discuția are loc la birou sau online, după cum îți este mai comod. Durează, de regulă, în jur de o oră.",
      "Aduci documentele pe care le ai. Le citim împreună și îți explic, în cuvinte simple, ce opțiuni ai, ce riscuri există și cât ar putea dura fiecare variantă.",
      "La final, știi ce se poate face și ce pași ar urma. Decizia de a merge mai departe îți aparține.",
    ],
  },
  {
    title: "Contractul de asistență juridică",
    short: "Dacă mergem mai departe, semnăm un contract în care scriem clar ce fac, în ce termen și onorariul.",
    details: [
      "Dacă decizi să lucrăm împreună, încheiem un contract de asistență juridică, așa cum prevede legea profesiei de avocat.",
      "În contract sunt trecute, în scris, obiectul colaborării, ce anume voi face, onorariul și modul de plată.",
      "Nu încep lucrul pe dosar înainte ca toate acestea să fie convenite și semnate.",
    ],
  },
  {
    title: "Lucrul pe dosar",
    short: "Redactez actele, te reprezint, te țin la curent la fiecare pas important și îți răspund la întrebări.",
    details: [
      "Pregătesc actele necesare, depun cererile și te reprezint în fața instanței sau a altor instituții, după caz.",
      "Te informez la fiecare pas important: ce s-a întâmplat, ce urmează și dacă e nevoie de ceva de la tine.",
      "Ai mereu un mod clar de a mă contacta și primești răspunsuri în termenii conveniți.",
    ],
  },
];

import mock from '../mock'

const data = {
  items: [
    {
      word: 'aku',
      meaning: 'I; me; my',
      notes:
        "Aku is the less formal version of #Saya, and is used in more casual contexts, like with friends acquantainces and people of your same age who you don't need to give a higher level of respect too.",
      seeAlso: 'Saya',
      categories: 'pronouns'
    },
    {
      word: 'kamu',
      meaning: 'you; your',
      notes: 'Kamu is the less formal and more common form of #Anda',
      seeAlso: '',
      categories: 'pronouns'
    },
    {
      word: 'yang',
      meaning: 'that, which, who',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tidak',
      meaning: 'no; not',
      notes: "There are different words to mean No, Not, and Don't.  ",
      seeAlso: 'bukan; gak',
      categories: 'no-and-not; negate; simple-answers'
    },
    {
      word: 'ini',
      meaning: 'this',
      notes: 'To refer to something generally near by',
      seeAlso: 'itu',
      categories: 'this-that'
    },
    {
      word: 'itu',
      meaning: 'that, it',
      notes: "To refer to something that isn't within reach",
      seeAlso: 'ini',
      categories: ''
    },
    {
      word: 'dan',
      meaning: 'and',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'di',
      meaning: 'in; at; on',
      notes:
        'There is also an unrelated grammar rule that adds a prefix "di" attached to words.  This is not the same thing, eventhough people often incorrectly write this form of "di" attached to the following word, which is incorrect and has a different meaning',
      seeAlso: '',
      categories: 'prepositions?'
    },
    {
      word: 'dia',
      meaning: 'he, she; him; hers; it',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'akan',
      meaning: 'will, going to, about to; regarding, about',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'apa',
      meaning: 'what',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kita',
      meaning: 'we; us; our',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'untuk',
      meaning: 'for',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'anda',
      meaning: 'you; your',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bisa',
      meaning: 'to be able',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'ada',
      meaning: 'there is, there are; to exist',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mereka',
      meaning: 'they; them; their',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'saya',
      meaning: 'I; me; my',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tahu',
      meaning: 'to know',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'dengan',
      meaning: 'with',
      notes: '',
      seeAlso: 'sama',
      categories: ''
    },
    {
      word: 'dari',
      meaning: 'from; out of; than',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'ya',
      meaning: 'yes',
      notes: '',
      seeAlso: 'iya',
      categories: ''
    },
    {
      word: 'kami',
      meaning: 'we; us; our',
      notes:
        'Used to refer to "us/we" when not including the person you are talking to.  (See also #kita when saying "we/us" but also including the person you\'re talking to)',
      seeAlso: 'kita',
      categories: ''
    },
    {
      word: 'tapi',
      meaning: 'but',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'ke',
      meaning: 'to',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'harus',
      meaning: 'to have to, must, should',
      notes: '',
      seeAlso: 'perlu',
      categories: ''
    },
    {
      word: 'sudah',
      meaning: '[used to indicate past action], already',
      notes: '',
      seeAlso: '',
      categories: 'before-after; already-not-yet'
    },
    {
      word: 'adalah',
      meaning: 'am, is, are; was, were',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'orang',
      meaning: 'person',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'saja',
      meaning: 'just, only',
      notes: '',
      seeAlso: 'aja',
      categories: ''
    },
    {
      word: 'ingin',
      meaning: 'to wish, desire',
      notes: '',
      seeAlso: 'mau',
      categories: ''
    },
    {
      word: 'seperti',
      meaning: 'like, as',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'pergi',
      meaning: 'to go',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'jika',
      meaning: 'if; when (future)',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'hanya',
      meaning: 'only, just',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sini',
      meaning: 'here',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sekarang',
      meaning: 'now; nowadays',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'semua',
      meaning: 'all',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'dalam',
      meaning: 'inside, in; deep',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'jadi',
      meaning: 'so, therefore',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'baik',
      meaning: 'good, fine; ok',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bukan',
      meaning: "no, not; isn't it, aren't you, etc.",
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'jangan',
      meaning: "don't",
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bagaimana',
      meaning: 'how',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'punya',
      meaning: 'to have, own',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'lagi',
      meaning: 'again; any more, any longer; more',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'lebih',
      meaning: 'more',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'pada',
      meaning: 'at, on, in',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mungkin',
      meaning: 'maybe, possibly, probably',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'melakukan',
      meaning: 'to do',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kalian',
      meaning: 'you',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sangat',
      meaning: 'very',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'karena',
      meaning: 'because',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'satu',
      meaning: 'one',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'pernah',
      meaning: 'once; ever',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mau',
      meaning: 'to want',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'telah',
      meaning: '[used to describe past action], already',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'ayo',
      meaning: "come on, let's go",
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'siapa',
      meaning: 'who',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'juga',
      meaning: 'also, too',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'hal',
      meaning: 'matter, thing; case, instance',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kembali',
      meaning: 'to return, come back',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'datang',
      meaning: 'to come, arrive',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'atau',
      meaning: 'or',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'hari',
      meaning: 'day',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sesuatu',
      meaning: 'something',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kasih',
      meaning: 'love, affection',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'melihat',
      meaning: 'to see, look',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'banyak',
      meaning: 'many, a lot',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'saat',
      meaning: 'moment; while',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'benar',
      meaning: 'true, right, correct',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'terima kasih',
      meaning: 'thank you',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'begitu',
      meaning: 'like that; so, very',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tentang',
      meaning: 'about, regarding',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'terjadi',
      meaning: 'to happen',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bahwa',
      meaning: 'that',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menjadi',
      meaning: 'to become',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kenapa',
      meaning: 'why, how come',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'seorang',
      meaning: 'a (person)',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bagus',
      meaning: 'good, fine',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bilang',
      meaning: 'to say',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'masih',
      meaning: 'still, yet',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'oke',
      meaning: 'ok',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sana',
      meaning: 'there',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kalau',
      meaning: 'if',
      notes: '',
      seeAlso: 'kalo; jika',
      categories: ''
    },
    {
      word: 'keluar',
      meaning: 'to go out, come out',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mana',
      meaning: 'where',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'lain',
      meaning: 'another, other',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'waktu',
      meaning: 'time',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'malam',
      meaning: 'evening, night',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tempat',
      meaning: 'place',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mati',
      meaning: 'to die; dead',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'lalu',
      meaning: 'afterwards, then',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'maaf',
      meaning: 'sorry',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'dapat',
      meaning: 'to be able to; get, obtain',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'membuat',
      meaning: 'to make',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'memiliki',
      meaning: 'to own, possess',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'anak',
      meaning: 'child',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tahun',
      meaning: 'year',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sedang',
      meaning: '[used to form present continuous]; medium, average',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sampai',
      meaning: 'until; to arrive*',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mengapa',
      meaning: 'why',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'beberapa',
      meaning: 'several, some, a few',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sekali',
      meaning: 'very',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'baru',
      meaning: 'new, recent; just, only',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mengatakan',
      meaning: 'to say',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sendiri',
      meaning: '-self; by -self',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sebuah',
      meaning: 'a, an',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'ayah',
      meaning: 'father',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menunggu',
      meaning: 'to wait',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'hidup',
      meaning: 'to live, be alive; life; alive',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'memerlukan',
      meaning: 'to need; necessary',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'ketika',
      meaning: 'when',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'salah',
      meaning: 'wrong, mistaken',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'cepat',
      meaning: 'fast, quick',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sama',
      meaning: 'same, equal; together with*',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'besar',
      meaning: 'big, large, great',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'masuk',
      meaning: 'to enter, come in',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'semuanya',
      meaning: 'everything, all',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mendengar',
      meaning: 'to hear',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'rumah',
      meaning: 'house',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'pikir',
      meaning: 'to think',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'dua',
      meaning: 'two',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tuhan',
      meaning: 'God',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'masalah',
      meaning: 'problem',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'selamat',
      meaning:
        '[used for greetings/well-wishing]; congratulations; good luck; safe, unharmed',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tentu',
      meaning: 'certain, sure',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'pasti',
      meaning: 'certain, definite',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'belum',
      meaning: 'not yet',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bapak',
      meaning:
        'father; [term of address for own father or respected older man]',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'berbicara',
      meaning: 'to speak',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'suka',
      meaning: 'to like',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'cukup',
      meaning: 'enough, sufficient; quite',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'selalu',
      meaning: 'always',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'pria',
      meaning: 'man; male',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'seseorang',
      meaning: 'someone',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mengerti',
      meaning: 'to understand',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sedikit',
      meaning: 'a little, a bit; few; slightly',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'ibu',
      meaning:
        'mother; [term of address for own mother or respected older woman]',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'berada',
      meaning: 'to be (somewhere)',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'atas',
      meaning: 'on top of, above; over; up, upwards; because of',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'setelah',
      meaning: 'after',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menolong',
      meaning: 'to help',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tinggal',
      meaning: 'to live, stay, remain',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sayang',
      meaning: 'pity; affection, love; darling, dear',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menemukan',
      meaning: 'to find, discover; invent',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bahkan',
      meaning: 'moreover, in fact; on the contrary',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'percaya',
      meaning: 'to believe, trust',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'jalan',
      meaning: 'path, street, road',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bertemu',
      meaning: 'to meet',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bekerja',
      meaning: 'to work',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'lama',
      meaning: 'long (duration); old, former',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'terlalu',
      meaning: 'too (excessively)',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'makan',
      meaning: 'to eat',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'wanita',
      meaning: 'woman',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mari',
      meaning:
        "[polite way of inviting sb. to do sth.], let's; please, help yourself",
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kecil',
      meaning: 'small, little',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kali',
      meaning: 'time (instance)',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tetap',
      meaning: 'fixed, permanent; still',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'setiap',
      meaning: 'every, each',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sebagai',
      meaning: 'as (something)',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'oleh',
      meaning: 'by (somebody/something)',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'berhenti',
      meaning: 'to stop, cease',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'yakin',
      meaning: 'sure, convinced',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'membunuh',
      meaning: 'to kill',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'luar',
      meaning: 'outside; external',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mengambil',
      meaning: 'to take; get, fetch',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'cara',
      meaning: 'way, method, manner',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'dunia',
      meaning: 'world',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mulai',
      meaning: 'to begin, start; from (time)',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'pertama',
      meaning: 'first',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'selama',
      meaning: 'during; as long as',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sebelum',
      meaning: 'before',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'uang',
      meaning: 'money',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bersama',
      meaning: 'together, jointly',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'teman',
      meaning: 'friend',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'boleh',
      meaning: 'may, can; to be allowed',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'senang',
      meaning: 'happy, content; to like',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'merasa',
      meaning: 'to feel; to think',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mencari',
      meaning: 'to look for, search for',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'gadis',
      meaning: 'unmarried girl',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'membutuhkan',
      meaning: 'to need',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'jam',
      meaning: "hour; clock; o'clock",
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mencoba',
      meaning: 'to try, attempt',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tanpa',
      meaning: 'without',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'dulu',
      meaning: 'first, before; used to, formerly',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'polisi',
      meaning: 'police',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'buruk',
      meaning: 'bad',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sebenarnya',
      meaning: 'actually, in fact',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'para',
      meaning: '[pluralizes the following word]',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'berapa',
      meaning: 'how much, how many; how (+ adjective)',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'membawa',
      meaning: 'to bring, carry',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kemudian',
      meaning: 'then, later',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'siap',
      meaning: 'ready, prepared',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'ingat',
      meaning: 'to remember',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sial',
      meaning: 'bad luck; unlucky',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'membiarkan',
      meaning: 'to let, allow',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mobil',
      meaning: 'car',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'takkan',
      meaning: "will not, won't",
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tuan',
      meaning: 'Mr., sir',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tidur',
      meaning: 'sleep; to sleep',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'gila',
      meaning: 'crazy, mad',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'maksud',
      meaning: 'purpose, intention; meaning',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kepada',
      meaning: 'to (a person)',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'terus',
      meaning: 'to continue',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'pulang',
      meaning: 'to go home, return',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'segera',
      meaning: 'soon; immediately',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kota',
      meaning: 'city, town',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sakit',
      meaning: 'sick, ill; pain',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'nama',
      meaning: 'name',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'halo',
      meaning: 'hello',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'takut',
      meaning: 'to be afraid',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'pun',
      meaning: 'even, also; then, subsequently',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sialan',
      meaning: 'unlucky person or thing; damn it!',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'seharusnya',
      meaning: 'should, ought to',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'memang',
      meaning: "indeed, that's true",
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'terakhir',
      meaning: 'last, final',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'biasa',
      meaning: 'normal, usual, ordinary; used to, accustomed to',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tiga',
      meaning: 'three',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'membantu',
      meaning: 'to help',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'terlihat',
      meaning: 'visible, seen',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'depan',
      meaning: 'front; next (week etc.)',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'cinta',
      meaning: 'love; to love',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sebentar',
      meaning: 'in a moment',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'minta',
      meaning: 'to ask, request; please',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bodoh',
      meaning: 'stupid',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bagian',
      meaning: 'part, share',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'manusia',
      meaning: 'human',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bawah',
      meaning: 'under, beneath, below',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'berhasil',
      meaning: 'to succeed',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tepat',
      meaning: 'exact, precise; appropriate, right',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'memberi',
      meaning: 'to give',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'rasa',
      meaning: 'taste, flavour; feeling',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'air',
      meaning: 'water',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sepertinya',
      meaning: 'it seems like',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'pagi',
      meaning: 'morning',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sungguh',
      meaning: 'real, true',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'hebat',
      meaning: 'superb, great',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bagi',
      meaning: 'for; to divide',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tangan',
      meaning: 'arm, hand',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'pekerjaan',
      meaning: 'job, work',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kehilangan',
      meaning: 'loss',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mengikuti',
      meaning: 'to follow; join in',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'keluarga',
      meaning: 'family',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'cuma',
      meaning: 'merely, only',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'nanti',
      meaning: 'later',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'suatu',
      meaning: 'a (certain)',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tua',
      meaning: 'old',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bergerak',
      meaning: 'to move',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'paling',
      meaning: 'the most',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tenang',
      meaning: 'calm, still, quiet',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'jauh',
      meaning: 'far',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'masa',
      meaning: 'the time period',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menit',
      meaning: 'minute',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'meninggalkan',
      meaning: 'to leave behind, abandon',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'terbaik',
      meaning: 'the best',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'peduli',
      meaning: 'to care, bother',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'penting',
      meaning: 'important',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'aneh',
      meaning: 'strange, peculiar',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'seluruh',
      meaning: 'entire, whole',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menghentikan',
      meaning: 'to stop (something)',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'selesai',
      meaning: 'finished, completed',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tadi',
      meaning: 'just now',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'duduk',
      meaning: 'to sit',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kedua',
      meaning: 'both; second',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bulan',
      meaning: 'month; moon',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'senjata',
      meaning: 'weapon',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'besok',
      meaning: 'tomorrow',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'khawatir',
      meaning: 'to worry',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kepala',
      meaning: 'head; chief',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'minum',
      meaning: 'to drink',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'berarti',
      meaning: 'to mean; significant, meaningful',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'secara',
      meaning: '[used to form adverbs], in a [adj.] way',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'pintu',
      meaning: 'door, gate',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'hampir',
      meaning: 'nearly, almost',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sekolah',
      meaning: 'school',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'berjalan',
      meaning: 'to walk; go',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'diam',
      meaning: 'silent, quiet',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sebelumnya',
      meaning: 'previously, beforehand',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'aman',
      meaning: 'safe',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sekitar',
      meaning: 'around',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'buat',
      meaning: 'for',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kemari',
      meaning: 'come here, this way',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sejak',
      meaning: 'since',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'nah',
      meaning: 'well, well then; look!',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'maka',
      meaning: 'therefore, so',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bermain',
      meaning: 'to play',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menggunakan',
      meaning: 'to use',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'astaga',
      meaning: "gosh!, for heaven's sake!",
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'cari',
      meaning: 'to look for, search for',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sulit',
      meaning: 'difficult, complicated',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'dekat',
      meaning: 'close, near',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'jatuh',
      meaning: 'to fall',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kapan',
      meaning: 'when',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'memberitahu',
      meaning: 'to tell, inform',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kesempatan',
      meaning: 'opportunity',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'cantik',
      meaning: 'beautiful, pretty',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'benarkah',
      meaning: 'really?, is it true?',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mudah',
      meaning: 'easy',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kawan',
      meaning: 'friend',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mendapatkan',
      meaning: 'to obtain',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menarik',
      meaning: 'to pull; to attract; interesting, attractive',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'soal',
      meaning: 'matter, issue, question',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mata',
      meaning: 'eye',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'berakhir',
      meaning: 'to end',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'nya',
      meaning: '[suffix added to words to indicate possession]; the',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'hati',
      meaning: 'liver; heart (figurative)',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'jelas',
      meaning: 'clear, distinct',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'akhirnya',
      meaning: 'finally, eventually',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'minggu',
      meaning: 'week',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tim',
      meaning: 'team',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'indah',
      meaning: 'beautiful',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'alasan',
      meaning: 'reason',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bangun',
      meaning: 'to get up, wake up',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'keras',
      meaning: 'hard; loud',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'serius',
      meaning: 'serious',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'berubah',
      meaning: 'to become different, change',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menyenangkan',
      meaning: 'to please; pleasing',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kosong',
      meaning: 'empty; blank',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'belakang',
      meaning: 'back, rear; behind',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'dokter',
      meaning: 'doctor',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'agar',
      meaning: 'in order to',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kuat',
      meaning: 'strong',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'lari',
      meaning: 'to run',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mendengarkan',
      meaning: 'to listen',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kamar',
      meaning: 'room',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kata',
      meaning: 'word',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'Amerika',
      meaning: 'America',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'berharap',
      meaning: 'to hope',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bertanya',
      meaning: 'to ask a question',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bajingan',
      meaning: 'bastard',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'berbeda',
      meaning: 'different',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'hilang',
      meaning: 'lost, missing',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'darah',
      meaning: 'blood',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'makanan',
      meaning: 'food',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menurut',
      meaning: 'according to',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'perang',
      meaning: 'war',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bantuan',
      meaning: 'help, assistance',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'raja',
      meaning: 'king',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'demi',
      meaning: 'for the sake of',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kabar',
      meaning: 'news',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'telepon',
      meaning: 'telephone',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kehidupan',
      meaning: 'life',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'buku',
      meaning: 'book',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'meninggal',
      meaning: 'to die',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'ruang',
      meaning: 'space; room',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'daripada',
      meaning: 'than; instead of',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'turun',
      meaning: 'to descend, go down',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'lima',
      meaning: 'five',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kaki',
      meaning: 'foot, leg',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menyelamatkan',
      meaning: 'to save, rescue',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'melepaskan',
      meaning: 'to release, set free',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menuju',
      meaning: 'to approach, go towards',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kapal',
      meaning: 'boat, ship',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'pertanyaan',
      meaning: 'question',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'suara',
      meaning: 'voice; vote',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'anjing',
      meaning: 'dog',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'naik',
      meaning: 'to ascend, go up, climb',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'dasar',
      meaning: 'base, basis, foundation',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'muda',
      meaning: 'young',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'permisi',
      meaning: 'excuse me',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'perjalanan',
      meaning: 'journey, trip',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kasus',
      meaning: 'case',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tinggi',
      meaning: 'high, tall',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'lupa',
      meaning: 'to forget',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'marah',
      meaning: 'angry',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menikah',
      meaning: 'to marry',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'lewat',
      meaning: 'through, via; past, over (in time phrases)',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'ide',
      meaning: 'idea',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'rencana',
      meaning: 'plan',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'belajar',
      meaning: 'to learn, study',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'silakan',
      meaning: 'please (when offering)',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'penuh',
      meaning: 'full',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'lucu',
      meaning: 'funny, amusing; cute',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'negara',
      meaning: 'country, state',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'berusaha',
      meaning: 'to try, endeavour',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'berdiri',
      meaning: 'to stand',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'cerita',
      meaning: 'story',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kecuali',
      meaning: 'except',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tanah',
      meaning: 'land; ground, soil',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kekuatan',
      meaning: 'strength, power',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'buka',
      meaning: 'open',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'langsung',
      meaning: 'direct, straight',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menang',
      meaning: 'to win',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'antara',
      meaning: 'between',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'membicarakan',
      meaning: 'to discuss, talk about',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menunjukkan',
      meaning: 'to point out, show',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bila',
      meaning: 'when, if',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kematian',
      meaning: 'death',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'pesawat',
      meaning: 'airplane',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'Nona',
      meaning: 'Miss',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'melalui',
      meaning: 'through, via; by means of',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sendirian',
      meaning: 'alone',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'melawan',
      meaning: 'to oppose, be against',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'akhir',
      meaning: 'end',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menerima',
      meaning: 'to receive; accept',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'rahasia',
      meaning: 'secret',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'nomor',
      meaning: 'number',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sepanjang',
      meaning: 'along',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'terlambat',
      meaning: 'late, delayed',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'api',
      meaning: 'fire, flame',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'pesta',
      meaning: 'party, celebration',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'memahami',
      meaning: 'to understand, comprehend',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'artinya',
      meaning: 'it means, that is to say',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'brengsek',
      meaning: 'damn!, blast!',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'empat',
      meaning: 'four',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kira',
      meaning: 'to guess, assume',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'pilihan',
      meaning: 'choice, selection',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'rasanya',
      meaning: 'it appears, it seems',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sementara',
      meaning: 'during, while; temporary',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'panas',
      meaning: 'hot',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'memilih',
      meaning: 'to choose, select; vote',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'semakin',
      meaning: 'even more, more and more',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mulia',
      meaning: 'noble, honourable',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'omong',
      meaning: 'to speak, talk',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'film',
      meaning: 'film',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tiba',
      meaning: 'to arrive',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menembak',
      meaning: 'to shoot',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bung',
      meaning: 'mate, man, buddy',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'memakai',
      meaning: 'to wear; use',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tampak',
      meaning: 'to appear, be visible',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'segalanya',
      meaning: 'everything',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'membayar',
      meaning: 'to pay',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'penjara',
      meaning: 'jail, prison',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kesalahan',
      meaning: 'error, mistake; fault',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sempurna',
      meaning: 'perfect',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menahan',
      meaning: 'to hold back, restrain',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'pesan',
      meaning: 'message; instruction, order',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'perusahaan',
      meaning: 'company',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bercanda',
      meaning: 'to joke',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bayi',
      meaning: 'baby',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bahagia',
      meaning: 'happy, joyous',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'nyata',
      meaning: 'real; evident, obvious',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mengenal',
      meaning: 'to know, be acquainted with',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menjawab',
      meaning: 'to answer, reply',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tutup',
      meaning: 'closed, shut',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bahasa',
      meaning: 'language',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'semoga',
      meaning: 'hopefully',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'keren',
      meaning: 'great, cool, impressive',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bertahan',
      meaning: 'to last, hold out',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'muncul',
      meaning: 'to appear, emerge',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kantor',
      meaning: 'office',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'terbang',
      meaning: 'to fly',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'surat',
      meaning: 'letter; certificate',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mundur',
      meaning: 'to go back, reverse; retreat',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mesin',
      meaning: 'machine, engine',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'janji',
      meaning: 'promise',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'beruntung',
      meaning: 'lucky, fortunate',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'permainan',
      meaning: 'game',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'perintah',
      meaning: 'command, order',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bumi',
      meaning: 'earth',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sebaiknya',
      meaning: "preferably, it's best if",
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'gue',
      meaning: 'I; me',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'dingin',
      meaning: 'cold',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'setuju',
      meaning: 'to agree',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'awal',
      meaning: 'beginning; early',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menjaga',
      meaning: 'to guard, keep watch',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'putri',
      meaning: 'daughter',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'perempuan',
      meaning: 'female',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'guru',
      meaning: 'teacher',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mengulangi',
      meaning: 'to repeat',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'berikutnya',
      meaning: 'next',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'namun',
      meaning: 'however, yet',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tampaknya',
      meaning: 'apparently, it seems that',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'setidaknya',
      meaning: 'at least',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'semacam',
      meaning: 'a kind of, a type of',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sering',
      meaning: 'often',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bisnis',
      meaning: 'business',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'membeli',
      meaning: 'to buy',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menghancurkan',
      meaning: 'to destroy, smash, crush',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'segala',
      meaning: 'all, every; entirely',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tanda',
      meaning: 'sign, mark',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kelas',
      meaning: 'class',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'barang',
      meaning: 'goods; stuff',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'membaca',
      meaning: 'I read',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'berita',
      meaning: 'news',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sehingga',
      meaning: 'with the result that',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'laut',
      meaning: 'sea',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kurang',
      meaning: 'less; minus',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'jahat',
      meaning: 'bad, wicked, evil',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menangkap',
      meaning: 'to catch; capture',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'setengah',
      meaning: 'half',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menelepon',
      meaning: 'to telephone',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'pikiran',
      meaning: 'thought',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mencuri',
      meaning: 'to steal',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menulis',
      meaning: 'to write',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'berbahaya',
      meaning: 'dangerous',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mimpi',
      meaning: 'dream',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tugas',
      meaning: 'task, duty',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'benda',
      meaning: 'thing, object',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sang',
      meaning: '[used to denote respect]',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'siang',
      meaning: 'late morning, early afternoon',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tersebut',
      meaning: 'mentioned, aforementioned',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'meskipun',
      meaning: 'although',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'hukum',
      meaning: 'law',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'berani',
      meaning: 'brave, courageous',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'istri',
      meaning: 'wife',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'saudara',
      meaning:
        'sibling; relative; [formal term of address for people of equivalent status]',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'hitam',
      meaning: 'black',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menangis',
      meaning: 'to cry',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'terluka',
      meaning: 'injured, hurt',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'manis',
      meaning: 'sweet; pretty',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kunci',
      meaning: 'key',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'hubungan',
      meaning: 'link, connection, relationship',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sebelah',
      meaning: 'next to; one half',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'juta',
      meaning: 'million',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'agak',
      meaning: 'rather, quite',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mengenai',
      meaning: 'about, concerning',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'musim',
      meaning: 'season',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tubuh',
      meaning: 'body',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'Inggris',
      meaning: 'England',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kereta',
      meaning: 'carriage, wagon',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'enam',
      meaning: 'six',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sebabnya',
      meaning: 'the reason is, the reason being',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'berbohong',
      meaning: 'to lie, tell a lie',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'udara',
      meaning: 'air',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menyesal',
      meaning: 'to regret',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mengirim',
      meaning: 'to send',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mengerikan',
      meaning: 'terrifying, horrifying',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'putih',
      meaning: 'white',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'melindungi',
      meaning: 'to protect, shelter',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sisi',
      meaning: 'side',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'hadiah',
      meaning: 'gift, present; prize',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'arah',
      meaning: 'direction',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'merah',
      meaning: 'red',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'memikirkan',
      meaning: 'to think about',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'informasi',
      meaning: 'information',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'lantai',
      meaning: 'floor; storey',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'berat',
      meaning: 'heavy; weight',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'terhadap',
      meaning: 'regarding, concerning',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'pindah',
      meaning: 'to move (house, country)',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bebas',
      meaning: 'free',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'membenci',
      meaning: 'to hate',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'presiden',
      meaning: 'president',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'enak',
      meaning: 'delicious, tasty; pleasant',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'betapa',
      meaning: 'how very',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kemarin',
      meaning: 'yesterday',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'nyonya',
      meaning: 'Mrs., madam',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'pribadi',
      meaning: 'personal, private',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'wajah',
      meaning: 'face',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'selamanya',
      meaning: 'forever',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'obat',
      meaning: 'medicine',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bersalah',
      meaning: 'guilty',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'memutuskan',
      meaning: 'to decide',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'melewati',
      meaning: 'to pass through, go through',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'saling',
      meaning: 'each other, one another',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'lagu',
      meaning: 'song',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menghilang',
      meaning: 'to disappear',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bergabung',
      meaning: 'to join, join in',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'paman',
      meaning: 'uncle',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sistem',
      meaning: 'system',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menghabiskan',
      meaning: 'to spend; use up, finish',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'memanggil',
      meaning: 'to call, summon',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kartu',
      meaning: 'card',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mengubah',
      meaning: 'to alter, change',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mampu',
      meaning: 'able, capable',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'membuka',
      meaning: 'to open',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'begini',
      meaning: 'like this',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'pintar',
      meaning: 'clever',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'hingga',
      meaning: 'until',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'selain',
      meaning: 'besides, apart from',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'lu',
      meaning: 'you',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'milik',
      meaning: 'property, possession',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kanan',
      meaning: 'right (direction)',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mengalami',
      meaning: 'to experience',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'musik',
      meaning: 'music',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'jenis',
      meaning: 'kind, sort, type',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'berjanji',
      meaning: 'to promise',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'toko',
      meaning: 'shop, store',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'keadaan',
      meaning: 'condition, state',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'entah',
      meaning: 'to not know',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menyerang',
      meaning: 'to attack',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'keamanan',
      meaning: 'safety, security',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'memeriksa',
      meaning: 'to check, examine',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menyerah',
      meaning: 'to surrender, give in',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sibuk',
      meaning: 'busy',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'panjang',
      meaning: 'long; length',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bos',
      meaning: 'boss',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'batu',
      meaning: 'stone',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'pernikahan',
      meaning: 'wedding',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'pakaian',
      meaning: 'clothes',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'gagal',
      meaning: 'to fail',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'detik',
      meaning: 'second',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tertawa',
      meaning: 'to laugh',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tentara',
      meaning: 'army',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'jujur',
      meaning: 'honest',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tengah',
      meaning: 'middle',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sadar',
      meaning: 'conscious, aware',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mandi',
      meaning: 'to bathe, have a bath',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'biasanya',
      meaning: 'usually',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'matahari',
      meaning: 'sun',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kiri',
      meaning: 'left',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'foto',
      meaning: 'photograph',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'petugas',
      meaning: 'officer',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'burung',
      meaning: 'bird',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'anggota',
      meaning: 'member',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bintang',
      meaning: 'star',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'akal',
      meaning: 'intellect, reason',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'ruangan',
      meaning: 'room, chamber',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kecelakaan',
      meaning: 'accident',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'hutan',
      meaning: 'forest, wood',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'memukul',
      meaning: 'to hit, strike',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'makhluk',
      meaning: 'creature',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'seberapa',
      meaning: 'as much as',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'posisi',
      meaning: 'position',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'panggilan',
      meaning: 'call',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'nenek',
      meaning: 'grandmother',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'khusus',
      meaning: 'special',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'terbuka',
      meaning: 'open',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mohon',
      meaning: 'to beg, implore; request',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'perasaan',
      meaning: 'feeling',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'acara',
      meaning: 'program, agenda',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'utama',
      meaning: 'main',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tertarik',
      meaning: 'attracted, interested',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kamera',
      meaning: 'camera',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'cahaya',
      meaning: 'light; glow',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menonton',
      meaning: 'to watch (for entertainment)',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tujuan',
      meaning: 'aim, goal; destination',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'gak',
      meaning: 'no; not',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'catatan',
      meaning: 'note',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menggambar',
      meaning: 'to draw',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mabuk',
      meaning: 'drunk',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'utara',
      meaning: 'north',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kotak',
      meaning: 'box',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'cocok',
      meaning: 'suitable; agreed!',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kabur',
      meaning: 'blurry, hazy',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kalah',
      meaning: 'to lose, be defeated',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kini',
      meaning: 'nowadays',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'perhatian',
      meaning: 'attention',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kuda',
      meaning: 'horse',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menyelesaikan',
      meaning: 'to finish',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menjual',
      meaning: 'to sell',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kakak',
      meaning: 'older brother, older sister',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'selanjutnya',
      meaning: 'futhermore, moreover; then, after that',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'operasi',
      meaning: 'operation',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'masalahnya',
      meaning: 'the problem is',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'situasi',
      meaning: 'situation',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'dewa',
      meaning: 'god',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'hak',
      meaning: 'right, entitlement',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sejauh',
      meaning: 'as far as',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'daging',
      meaning: 'meat',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kejahatan',
      meaning: 'crime; wickedness',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bank',
      meaning: 'bank',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kulit',
      meaning: 'skin; leather',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'es',
      meaning: 'ice',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'merupakan',
      meaning: 'to constitute, form',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'hantu',
      meaning: 'ghost',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'ternyata',
      meaning: 'evidently; it turned out that',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'terlibat',
      meaning: 'involved',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kopi',
      meaning: 'coffee',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'penjaga',
      meaning: 'guard',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'ahli',
      meaning: 'expert, specialist',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'melarikan',
      meaning: 'to run off with; kidnap',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'gelap',
      meaning: 'dark',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sampah',
      meaning: 'rubbish, garbage',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bau',
      meaning: 'smell; smelly',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'emas',
      meaning: 'gold',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mengganggu',
      meaning: 'to bother, disturb',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mengangkat',
      meaning: 'to lift, raise',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'berguna',
      meaning: 'useful',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'pantas',
      meaning: 'suitable, appropriate',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'ketakutan',
      meaning: 'fear; frightened',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menceritakan',
      meaning: 'to narrate, tell',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'alam',
      meaning: 'nature',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menyadari',
      meaning: 'to realise, be aware of',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'pacar',
      meaning: 'boyfriend, girlfriend',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bersumpah',
      meaning: 'to swear',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'istirahat',
      meaning: 'rest; break, pause',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'prajurit',
      meaning: 'soldier',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'gedung',
      meaning: 'building',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'pemerintah',
      meaning: 'government',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'pusat',
      meaning: 'centre; central',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'daerah',
      meaning: 'area, region',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bernama',
      meaning: 'to be called',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kaya',
      meaning: 'rich',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'pohon',
      meaning: 'tree',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'alat',
      meaning: 'tool, device',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menempatkan',
      meaning: 'to place, position',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'daftar',
      meaning: 'list',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'laporan',
      meaning: 'report',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'meja',
      meaning: 'table',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kemungkinan',
      meaning: 'possibility',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'lapar',
      meaning: 'hungry',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'hotel',
      meaning: 'hotel',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'nyaman',
      meaning: 'comfortable, cosy',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menghubungi',
      meaning: 'to contact',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'minuman',
      meaning: 'drink',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'selatan',
      meaning: 'south',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'pertemuan',
      meaning: 'meeting',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bahaya',
      meaning: 'danger',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kejadian',
      meaning: 'incident, event',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'maju',
      meaning: 'to advance, progress; advanced, progressive',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'asing',
      meaning: 'foreign, alien',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'binatang',
      meaning: 'animal',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sobat',
      meaning: 'friend, comrade',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'rambut',
      meaning: 'hair',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'ikan',
      meaning: 'fish',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menutup',
      meaning: 'to close, shut',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'layak',
      meaning: 'decent, proper',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sebagian',
      meaning: 'partly, partially',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sejarah',
      meaning: 'history',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'balik',
      meaning: 'to return',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sepatu',
      meaning: 'shoe',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kebenaran',
      meaning: 'truth',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'rusak',
      meaning: 'broken, damaged',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'berasal',
      meaning: 'to come from',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menjelaskan',
      meaning: 'to explain',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'berangkat',
      meaning: 'to depart, leave',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'otak',
      meaning: 'brain',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bercinta',
      meaning: 'to be in love',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'normal',
      meaning: 'normal',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'urusan',
      meaning: 'affair, matter',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bangga',
      meaning: 'proud',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tumbuh',
      meaning: 'to grow',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mengalahkan',
      meaning: 'to beat, defeat',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'luka',
      meaning: 'wound, injury',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sesuai',
      meaning: 'suitable, appropriate; in accordance with',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'harapan',
      meaning: 'hope; expectation',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'jiwa',
      meaning: 'soul, spirit',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'lahir',
      meaning: 'to be born; external, outer',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'memastikan',
      meaning: 'to make sure, ensure',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tujuh',
      meaning: 'seven',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'lubang',
      meaning: 'hole',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'keputusan',
      meaning: 'decision',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'lelah',
      meaning: 'tired',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'pengacara',
      meaning: 'lawyer',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kerajaan',
      meaning: 'kingdom',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kelihatannya',
      meaning: 'apparently, it seems',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'berhubungan',
      meaning: 'related to; to get in touch with, be in contact with',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'suami',
      meaning: 'husband',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'terkenal',
      meaning: 'famous',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'ampun',
      meaning: 'forgiveness, mercy',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'ratu',
      meaning: 'queen',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kelihatan',
      meaning: 'visible',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bermaksud',
      meaning: 'to intend',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'dewasa',
      meaning: 'adult',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bunga',
      meaning: 'flower',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'malu',
      meaning: 'shy, embarassed, ashamed',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kilometer',
      meaning: 'kilometre',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mengeluarkan',
      meaning: 'to put out, take out; issue',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tersisa',
      meaning: 'leftover',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tewas',
      meaning: 'to be killed',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'pedang',
      meaning: 'sword',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'jawaban',
      meaning: 'answer',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'membangun',
      meaning: 'to build',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kedengarannya',
      meaning: 'that sounds',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'aturan',
      meaning: 'rule, regulation',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kacau',
      meaning: 'messy, disorderly',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sepuluh',
      meaning: 'ten',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'truk',
      meaning: 'truck',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'langkah',
      meaning: 'step',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'satunya',
      meaning: 'the only',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'awas',
      meaning: 'be careful, watch out',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'baju',
      meaning: 'upper clothing',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'berharga',
      meaning: 'to cost; valuable',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'hasil',
      meaning: 'result, outcome',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'hewan',
      meaning: 'animal',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'hancur',
      meaning: 'destroyed, smashed',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sungai',
      meaning: 'river',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'latihan',
      meaning: 'training, exercise',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'titik',
      meaning: 'point, dot',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bertarung',
      meaning: 'to fight',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menyimpan',
      meaning: 'to keep, store',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'berteriak',
      meaning: 'to shout, scream',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'jendela',
      meaning: 'window',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mencapai',
      meaning: 'to reach, achieve, attain',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tindakan',
      meaning: 'measure, action, step',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'Jepang',
      meaning: 'Japan',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mulut',
      meaning: 'mouth',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'lemah',
      meaning: 'week, feeble',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tamu',
      meaning: 'guest',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'semalam',
      meaning: 'last night',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bahan',
      meaning: 'material; ingredients',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mengejar',
      meaning: 'to chase',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'memegang',
      meaning: 'to hold, grip',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'situ',
      meaning: 'there',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'macam',
      meaning: 'kind, sort',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sederhana',
      meaning: 'simple',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kotoran',
      meaning: 'dirt, filth; excrement',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'adil',
      meaning: 'just, fair',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menari',
      meaning: 'to dance',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'seks',
      meaning: 'sex',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menemui',
      meaning: 'to meet up with',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menolak',
      meaning: 'to refuse, reject',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bertindak',
      meaning: 'to act, take action',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'komputer',
      meaning: 'computer',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'memotong',
      meaning: 'to cut',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kode',
      meaning: 'code',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'habis',
      meaning: 'finished, used up; completely; after that*',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'lampu',
      meaning: 'lamp, light',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'pertandingan',
      meaning: 'competition, contest',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'ketiga',
      meaning: 'third',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'pangeran',
      meaning: 'prince',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'Belanda',
      meaning: 'Dutch',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'militer',
      meaning: 'military',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'radio',
      meaning: 'radio',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'terserah',
      meaning: 'up to you!',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bersih',
      meaning: 'clean',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'merusak',
      meaning: 'to damage, spoil',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kesepakatan',
      meaning: 'agreement',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'palsu',
      meaning: 'fake, false',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tas',
      meaning: 'bag',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'berbuat',
      meaning: 'to do',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'harga',
      meaning: 'price',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'angin',
      meaning: 'wind',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menikmati',
      meaning: 'to enjoy',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'maksudnya',
      meaning: 'that is to say',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'putus',
      meaning: 'broken off',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kotor',
      meaning: 'dirty, filthy',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'memperhatikan',
      meaning: 'to pay attention',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bersembunyi',
      meaning: 'to hide',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'pemimpin',
      meaning: 'leader',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'pengadilan',
      meaning: 'court of law',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'seekor',
      meaning: 'a, an',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'pantai',
      meaning: 'beach, coast',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'biru',
      meaning: 'blue',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tingkat',
      meaning: 'level',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'pulau',
      meaning: 'island',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'konyol',
      meaning: 'silly, foolish',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'negeri',
      meaning: 'country',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'ih',
      meaning: '[particle used to soften questions]',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'hujan',
      meaning: 'rain',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kue',
      meaning: 'cake',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menghadapi',
      meaning: 'to face, confront',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'lokasi',
      meaning: 'location',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'dinding',
      meaning: 'wall',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'timur',
      meaning: 'east',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'membayangkan',
      meaning: 'to imagine',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'gunung',
      meaning: 'mountain',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'terjebak',
      meaning: 'stuck',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'termasuk',
      meaning: 'included',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kisah',
      meaning: 'story',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'perubahan',
      meaning: 'change',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menyentuh',
      meaning: 'to touch',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'cepatlah',
      meaning: 'hurry up!',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'berjuang',
      meaning: 'to fight, struggle',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menderita',
      meaning: 'to suffer',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kursi',
      meaning: 'chair',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'pisau',
      meaning: 'knife',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'meletakkan',
      meaning: 'to put (something somewhere)',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'langit',
      meaning: 'sky',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bar',
      meaning: 'bar',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mirip',
      meaning: 'similar',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kucing',
      meaning: 'cat',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'seminggu',
      meaning: 'one week',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menjalankan',
      meaning: 'to operate, run',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'jantung',
      meaning: 'heart',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'warna',
      meaning: 'colour',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'barat',
      meaning: 'west; western',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kehormatan',
      meaning: 'honour',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'warga',
      meaning: 'member',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kelompok',
      meaning: 'group',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'jumlah',
      meaning: 'amount',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sedih',
      meaning: 'sad',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'gigi',
      meaning: 'tooth',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'Rusia',
      meaning: 'Russia',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menyedihkan',
      meaning: 'saddening, depressing',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'garis',
      meaning: 'line',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'pihak',
      meaning: 'side, party',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menangani',
      meaning: 'to handle',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'ayam',
      meaning: 'chicken',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'terbakar',
      meaning: 'to catch fire, be on fire',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menyebabkan',
      meaning: 'to cause',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'asli',
      meaning: 'original; genuine; native',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'memimpin',
      meaning: 'to lead',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tukang',
      meaning: 'handyman; craftsman',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'umum',
      meaning: 'general; public',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'jari',
      meaning: 'digit (body part)',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menyakiti',
      meaning: 'to hurt',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sehat',
      meaning: 'healthy',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'melanjutkan',
      meaning: 'to continue',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mesjid',
      meaning: 'mosque',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menakjubkan',
      meaning: 'amazing, astonishing',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'surga',
      meaning: 'heaven, paradise',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tidak usah',
      meaning: "it is not necessary, there's no point",
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sisa',
      meaning: 'rest of it, remainder',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'delapan',
      meaning: 'eight',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'persis',
      meaning: 'exactly, precisely',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menciptakan',
      meaning: 'to create',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mengatur',
      meaning: 'to organize, set up',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tulang',
      meaning: 'bone',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'gereja',
      meaning: 'church',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'penyakit',
      meaning: 'illness, disease',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'pemain',
      meaning: 'player',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'pertempuran',
      meaning: 'battle, combat',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'petunjuk',
      meaning: 'clue, hint; instruction',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'lelaki',
      meaning: 'male',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bir',
      meaning: 'beer',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'membersihkan',
      meaning: 'to clean',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'listrik',
      meaning: 'electricity; electric',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'pasangan',
      meaning: 'pair',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'ketua',
      meaning: 'chairman',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'santai',
      meaning: 'relaxed; to relax',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'jelek',
      meaning: 'ugly; bad',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'darurat',
      meaning: 'emergency',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menjauh',
      meaning: 'to be away, stay away',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'membuang',
      meaning: 'to throw away',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kejutan',
      meaning: 'surprise',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'ribu',
      meaning: 'thousand',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'supaya',
      meaning: 'so that; [introduces a polite command]',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bentuk',
      meaning: 'shape',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'desa',
      meaning: 'village',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'babi',
      meaning: 'pig',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kebanyakan',
      meaning: 'mostly',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'celana',
      meaning: 'trousers',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'suruh',
      meaning: 'to tell (someone to do something)',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'halaman',
      meaning: 'page; yard',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'betul',
      meaning: 'right, correct',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kencan',
      meaning: 'date, rendezvous',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'stasiun',
      meaning: 'station',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'melepaskan',
      meaning: 'to set free',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'rendah',
      meaning: 'low',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'adik',
      meaning: 'younger brother, younger sister',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'melompat',
      meaning: 'to jump',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mengurus',
      meaning: 'to manage',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kakek',
      meaning: 'grandfather',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kena',
      meaning: 'to suffer from',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menakutki',
      meaning: 'to frighten',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'jalur',
      meaning: 'lane, track',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'klub',
      meaning: 'club',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tikus',
      meaning: 'mouse, rat',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'taman',
      meaning: 'park; garden',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'lepas',
      meaning: 'loose, free; freelance',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sore',
      meaning: 'afternoon',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'memperbaiki',
      meaning: 'to fix, repair',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'teh',
      meaning: 'tea',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tes',
      meaning: 'test',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tampan',
      meaning: 'handsome',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'wah',
      meaning: '[exclamation of surprise or annoyance]',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kemampuan',
      meaning: 'ability, capacity',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'buah',
      meaning: 'fruit',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'fokus',
      meaning: 'focus',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'lelucon',
      meaning: 'joke',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mengucapkan',
      meaning: 'to pronounce',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kondisi',
      meaning: 'condition',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'wilayah',
      meaning: 'region, district',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'lapangan',
      meaning: 'field',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mantan',
      meaning: 'former (position holder), ex-',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bakar',
      meaning: 'to burn; barbecued',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tergantung',
      meaning: 'depending on',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bersiap',
      meaning: 'to get ready',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'masyarakat',
      meaning: 'society, community',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'guna',
      meaning: 'use, purpose; in order to',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menyebutkan',
      meaning: 'to mention',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'seni',
      meaning: 'art',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'terkejut',
      meaning: 'surprised, shocked',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'penerbangan',
      meaning: 'flight',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'nyawa',
      meaning: 'soul',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'berdoa',
      meaning: 'to pray',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'anggur',
      meaning: 'wine',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'permintaan',
      meaning: 'request; demand',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'terkadang',
      meaning: 'sometimes',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'seksi',
      meaning: 'sexy',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bibi',
      meaning: 'aunt',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sumber',
      meaning: 'source',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tangga',
      meaning: 'stairs; ladder',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tanggal',
      meaning: 'date',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kesulitan',
      meaning: 'difficulty, trouble',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'suci',
      meaning: 'holy',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kasar',
      meaning: 'rude; rough, coarse',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'pencuri',
      meaning: 'thief',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'walaupun',
      meaning: 'although',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mencium',
      meaning: 'to kiss',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'biaya',
      meaning: 'cost, expense',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kebetulan',
      meaning: 'coincidence',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sejati',
      meaning: 'genuine, true',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sinyal',
      meaning: 'signal',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menghargai',
      meaning: 'to appreciate, value',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'program',
      meaning: 'program',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menyembunyikan',
      meaning: 'to hide (something)',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'perahu',
      meaning: 'boat',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'parah',
      meaning: 'severe, grave',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'gerbang',
      meaning: 'gate',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sihir',
      meaning: 'magic',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tiket',
      meaning: 'ticket',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menganggap',
      meaning: 'to consider',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'puluh',
      meaning: '[multiple of ten]',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'pertunjukan',
      meaning: 'show, performance',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'narkoba',
      meaning: 'drugs, narcotics',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'membuktikan',
      meaning: 'to prove',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'hijau',
      meaning: 'green',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'jarak',
      meaning: 'distance',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'malah',
      meaning: 'on the contrary, instead',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'semangat',
      meaning: 'spirit, morale',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'melanggar',
      meaning: 'to violate, break',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'badai',
      meaning: 'storm',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'cerdas',
      meaning: 'intelligent',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kertas',
      meaning: 'paper',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'hormat',
      meaning: 'respect; respectful',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'energi',
      meaning: 'energy',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bersikap',
      meaning: 'to behave',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'isi',
      meaning: 'contents',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tekanan',
      meaning: 'pressure; emphasis',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'memalukan',
      meaning: 'shameful, disgraceful',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sudut',
      meaning: 'corner, angle',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'Perancis',
      meaning: 'France; French',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'putra',
      meaning: 'son',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'data',
      meaning: 'data',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bocah',
      meaning: 'small child (aged 2 to 10)',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mengagumkan',
      meaning: 'amazing, astonishing',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mustahil',
      meaning: 'impossible',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kejam',
      meaning: 'cruel',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'roti',
      meaning: 'bread',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'terutama',
      meaning: 'especially, particularly',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'istimewa',
      meaning: 'special',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mahal',
      meaning: 'expensive',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menjatuhkan',
      meaning: 'to drop',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kecepatan',
      meaning: 'speed',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'pelajaran',
      meaning: 'lesson',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'cincin',
      meaning: 'ring',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mengemudikan',
      meaning: 'to drive',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'lengkap',
      meaning: 'complete',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'pertarungan',
      meaning: 'fight',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sayangnya',
      meaning: 'unfortunately',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'dikenal',
      meaning: 'known',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'tertangkap',
      meaning: 'caught',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'hakim',
      meaning: 'judge',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menyebalkan',
      meaning: 'annoying',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'bangunan',
      meaning: 'building',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mengawasi',
      meaning: 'to oversee, supervise',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sengaja',
      meaning: 'deliberately, on purpose',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'Cina',
      meaning: 'China',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'ponsel',
      meaning: 'mobile phone',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'istana',
      meaning: 'palace',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'mematikan',
      meaning: 'to turn off, switch off',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'keberuntungan',
      meaning: 'luck',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'daya',
      meaning: 'power',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kebakaran',
      meaning: 'fire',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sepenuhnya',
      meaning: 'fully, completely',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'menanyakan',
      meaning: 'I ask about, enquire',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kendali',
      meaning: 'control',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kenyataan',
      meaning: 'reality; fact',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'sebanyak',
      meaning: 'as much as',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'restoran',
      meaning: 'restaurant',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'pekan',
      meaning: 'week',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'hamil',
      meaning: 'pregnant',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'pasien',
      meaning: 'patient',
      notes: '',
      seeAlso: '',
      categories: 'loan-words'
    },
    {
      word: 'roh',
      meaning: 'spirit',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'kegelapan',
      meaning: 'darkness',
      notes: '',
      seeAlso: '',
      categories: ''
    },
    {
      word: 'taruh',
      meaning: 'to put, place',
      notes: '',
      seeAlso: '',
      categories: ''
    }
  ]
}

mock.onGet('/dave/items').reply((config) => {
  const { q = '' } = config.params
  const queryLowered = q.toLowerCase()
  console.log('dave', data.items)
  const filteredData = data.items.filter((item) => item.word.toLowerCase().includes(queryLowered))

  return [
    200,
    {
      items: filteredData,
      total: data.items.length
    }
  ]
})
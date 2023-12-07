const defaultDataset = {
    "init": {
        answers: [
            {content: "WEBの仕事を依頼したい", nextId: "job_offer"},
            {content: "MoreJapanの活動内容について知りたい", nextId: "activity"},
            {content: "YouTube開設について相談したい", nextId: "youtube"},
            {content: "ざっくばらんに交流したい", nextId: "frankly"}
        ],
        question: "こんにちは！MoreJapanです。ご用件はなんでしょうか？",
    },
    "job_offer": {
        answers: [
            {content: "Webサイトを制作してほしい", nextId: "website"},
            {content: "Webアプリを開発してほしい", nextId: "webapp"},
            {content: "SEO対策について相談したい", nextId: "seo"},
            {content: "その他", nextId: "other_jobs"}
        ],
        question: "どのようなお仕事でしょうか？",
    },
    "website": {
        answers: [
            {content: "問い合わせる", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "Webサイト制作についてですね。コチラからお問い合わせできます。",
    },
    "webapp": {
        answers: [
            {content: "問い合わせる", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "Webアプリ開発についてですね。コチラからお問い合わせできます。",
    },
    "seo": {
        answers: [
            {content: "問い合わせる", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "SEO対策についてですね。コチラからお問い合わせできます。",
    },
    "other_jobs": {
        answers: [
            {content: "問い合わせる", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "その他についてですね。コチラからお問い合わせできます。",
    },
    "activity": {
        answers: [
            {content: "YouTubeを見る", nextId: "https://www.youtube.com/channel/UCNFPNKbyjsFuy0cNGeai2xA"},
            {content: "Instagramを見る", nextId: "https://www.instagram.com/morejapan_photo/"},
            {content: "YouTube開設について相談したい", nextId: "youtube"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "MoreJapanはYouTubeやInstagramで旅のお役立ち情報を発信をしています。\n気になるプラットフォームを御覧ください。",
    },
    "youtube": {
        answers: [
            {content: "YouTubeを見る", nextId: "https://www.youtube.com/channel/UCNFPNKbyjsFuy0cNGeai2xA"},
            {content: "コンサルティングについて詳しく聞きたい", nextId: "youtube_activity"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "MoreJapanはチャンネル開設から収益化までのコンサルティングも行っております。",
    },
    "youtube_activity": {
        answers: [
            {content: "問い合わせる", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "チャンネルのコンセプトなど、詳しく教えてください。",
    },
    "frankly": {
        answers: [
            {content: "DMする", nextId: "https://twitter.com/MoreJapanVideo1"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "OKです👌DMしてください✨",
    },
}

export default defaultDataset
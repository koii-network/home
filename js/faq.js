
window.addEventListener('load', (event) => {
    $("#cta-general").click(function () {
        $('html, body').animate({
            scrollTop: eval($('#general').offset().top - 74)
        }, 1000);
    });
    $("#cta-finnie").click(function () {
        $('html, body').animate({
            scrollTop: eval($('#finnie').offset().top - 74)
        }, 1000);
    });
    $("#cta-nodes").click(function () {
        $('html, body').animate({
            scrollTop: eval($('#nodes').offset().top - 74)
        }, 1000);
    });
    $("#cta-build").click(function () {
        $('html, body').animate({
            scrollTop: eval($('#build').offset().top - 74)
        }, 1000);
    });
    $("#cta-invest").click(function () {
        $('html, body').animate({
            scrollTop: eval($('#invest').offset().top - 74)
        }, 1000);
    });
    $("#cta-token").click(function () {
        $('html, body').animate({
            scrollTop: eval($('#token').offset().top - 74)
        }, 1000);
    });
    $("#cta-partnerships").click(function () {
        $('html, body').animate({
            scrollTop: eval($('#partnerships').offset().top - 74)
        }, 1000);
    });
    $("#search-input").submit(function (event) {
        event.preventDefault()
        var $inputs = $('#search-input :input');
        var values = {};
        $inputs.each(function () {
            values[this.name] = $(this).val();
        });
        var inputValue = values.faq
        console.log({ inputValue })
    })
});
var qaList = [
    {
        q: 'What is the Koii Network?',
        a: 'Koii stands for Knowledgable, Open, and Infinite Internet. Koii is a protocol focused on infrastructure to bring true decentralization to all dApps in the Web3 space. Koii has a fully self-sustaining ecosystem driven by the KOII token.',
        cls: 'general0',
    },
    {
        q: 'How can I be a part of the Koii Network?',
        a: 'Because Koii has a fully self-sustaining ecosystem, there are multiple ways to get involved with Koii. <b>Creators, Developers</b>, and <b>Node Runners</b> are instrumental to the success of the network, and we are always growing our network of <b>Investors, Influencers</b>, and <b>Ambassadors</b> to spread the word.'
            + '<br /><br /><b>Creators</b>&#x3a; Get the <a href="https://chrome.google.com/webstore/detail/finnie/cjmkndjhnagcfbpiemnkdpomccnjblmj" target="_blank">Finnie wallet</a> to start uploading content.'
            + '<br /><b>Developers</b>&#x3a; Check out the <a href="https://docs.koii.network" target="_blank">Koii Docs</a> to start building dApps entirely on-chain.'
            + '<br /><b>Node Runners</b>&#x3a; Pre-register to run a node <a href="/form/pre-register" target="_blank">here</a>. Node release planned for Q1 2022.'
            + '<br /><br /><b>Investors</b>&#x3a; Get on the investor waitlist <a href="/form/investor" target="_blank">here</a>.'
            + '<br /><b>Influencers</b>&#x3a; Email us at <a href="https://press@koii.network" target="_blank">press@koii.network</a>.'
            + '<br /><b>Ambassadors</b>&#x3a; Join our <a href="https://discord.gg/koii" target="_blank">Discord</a> to get started.'
            + '<br /><b>Everyone</b>&#x3a; Join us on social media'
            + '<br />'
            + '<a href="https://twitter.com/KoiiNetwork" target="_blank">Twitter</a>,'
            + '<a href="https://t.me/koiinetwork" target="_blank">Telegram</a>,'
            + '<a href="https://discord.gg/koii" target="_blank">Discord</a>,'
            + '<a href="https://www.youtube.com/channel/UCG0Rd0WehAxx6GIW7DuRyJQ" target="_blank">Youtube</a>,'
            + '<a href="https://www.linkedin.com/company/koii-network/mycompany/" target="_blank">Linkedin</a>,'
            + '<a href="https://github.com/koii-network" target="_blank">Github</a>',
        cls: 'general1'
    },
    {
        q: 'Why should I use Koii for my dApp?',
        a: 'Koii nodes are the best way to decentralize your app quickly and easily,'
            + 'without building your own trusted node network. All requests to the network (“Tasks”)'
            + 'are written in Javascript so any app can easily become a dApp. Koii easily integrates with'
            + 'Arweave and IPFS for fully decentralized storage as well.'
            + 'Learn more on the <a href="/earn/developers/" target="_blank">Developers’ page</a> and ask questions in the Discord.',
        cls: 'general2'
    },
    {
        q: 'Is Koii bad for the environment?',
        a: 'One big criticism of popular blockchains is that they are terrible for the environment. Proof of Work requires an enormous amount of energy. At Koii, we developed a new verification method, Proof of Real Traffic, to engage all the benefits of blockchain without such environmental harm.',
        cls: 'general3'
    },
    {
        q: 'Why is Koii sometimes written in all caps, but not always?',
        a: 'Koii refers to the network and its artifacts, which includes topics like the Koii Protocol, Koii Nodes and Koii Tasks. KOII refers to the token that runs the network. When you earn rewards, you earn KOII tokens from creating content or running a Koii node.',
        cls: 'general4'
    },
    {
        q: 'How can I get in touch with support?',
        a: 'For issues related to the faucet&#x3a; <a href="/form/faucet" target="_blank">here</a>'
            + '<br /><br />For all other issues&#x3a; <a href="/form/support" target="_blank">here</a>'
            + '<br /><br />Include as much detail as you can in your submission so we can help you as quickly as possible.',
        cls: 'general5'
    },
    {
        q: 'What is Finnie?',
        a: 'Finnie is Koii’s browser extension wallet—the best wallet around for NFTs and cross-chain bridging. Finnie will be your companion to the decentralized web. Some cool features include&#x3a;'
            + '<ul>'
            + '<li>Drag & Drop NFT creation</li>'
            + '<li>Share NFTs to earn attention rewards</li>'
            + '<li>1-click cross-chain bridging</li>'
            + '<li>Decentralized ID (DID) that links your cross-chain keys together</li>'
            + '<li>DID profile that includes personalized links to your pages</li>'
            + '<li>NFT gallery&#x3a; See all your NFTs (from multiple chains/keys) in one place</li>'
            + '<li>Easy NFT collections</li>'
            + '</ul>',
        cls: 'finnie0'
    },
    {
        q: 'How do I create an NFT with Koii?',
        a: 'The easiest way to create NFTs on Koii is by using the <a href="https://chrome.google.com/webstore/detail/finnie/cjmkndjhnagcfbpiemnkdpomccnjblmj" target="_blank">Finnie wallet</a>. Finnie is a browser extension that has a drag & drop NFT creation. It takes less than a minute to create an NFT and costs as little as one cent.',
        cls: 'finnie1'
    },
    {
        q: 'What type of content can I upload?',
        a: 'You can upload anything from images to videos and PDF files.',
        cls: 'finnie2'
    },
    {
        q: 'Why should I use Koii for my NFTs?',
        a: 'Koii uses the new Atomic NFT standard for all NFT, which has a few critical features&#x3a;'
            + '<ul>'
            + '<li>Making NFTs with Koii is fast, affordable, and easy. With the Finnie wallet, you can drag & drop any file and make it into an NFT in under 1 minute.</li>'
            + '<li>The contract and media file are stored together on Arweave. This means you will never lose your file, you can’t be rug-pulled, and you’ll never find a broken link.</li>'
            + '<li>All Atomic NFTs registered on Koii receive attention rewards</li>'
            + '<li>Easily transfer your NFT between blockchains. Want to sell your NFT on Opensea? We’ve got a bridge for that—and many more in the works!</li>'
            + '</ul>',
        cls: 'finnie3'
    },
    {
        q: 'How can I get tokens to upload my NFT?',
        a: 'You can get a few KOII tokens and a small amount of AR (to pay for the storage fee) from the KOII faucet at <a href="https://koi.rocks/faucet" target="_blank">koi.rocks/faucet</a>. This will provide you with the tokens needed to get started on the network. You can also purchase additional AR tokens from several different exchanges. More info on AR tokens can be found <a href="https://www.coingecko.com/en/coins/arweave?__cf_chl_managed_tk__=gXCBpCk67JAb.r558vCIN_axToCf49InEMaUTpsl_uU-1639414896-0-gaNycGzNCSU#markets" target="_blank">here</a>.',
        cls: 'finnie4'
    },
    {
        q: 'If I create an NFT with Finnie, do I need to pay KOII and AR to store the NFT?',
        a: 'Yes. Koii is built on the <a href="https://www.arweave.org/" target="_blank">Arweave</a> permaweb, AR will be used to store the file forever, and KOII tokens will allow you to begin earning attention rewards.',
        cls: 'finnie5'
    },
    {
        q: 'Where can I find my uploaded content?',
        a: 'Once you have connected your wallet to the leaderboard you can click on the “My Content” button on the right hand side of the screen to take you to your artist page.You can also view your content from within the Finnie wallet by selecting the “Go to My Gallery” button at the bottom of the wallet.',
        cls: 'finnie6'
    },
    {
        q: 'I uploaded the same thing twice. I want to remove one of them.',
        a: 'Everything uploaded to Arweave is permanent, no content can be taken down once uploaded and we cannot interfere with registration. If you do upload the same content twice just be sure to always share the same one so you can earn attention rewards accordingly.'
            + '<br /><br />We are looking into a "de-list" feature but we’re not quite there yet.'
            + '<br /><br />Check out our blog on permanence to learn more&#x3a;'
            + '<br /><a href="https://blog.koii.network/Almost-Infinite/" target="_blank">Read blog "Almost Infinite" </a>',
        cls: 'finnie7'
    },
    {
        q: 'How do I use the bridge from Arweave to other blockchains?',
        a: 'Currently Finnie supports bridinging from Arweave to Ethereum and vice versa, with more blockchains on the way. If you are interested in using the bridge more information can be found on this blog post.',
        cls: 'finnie8'
    },
    {
        q: 'Do I have to run a node to post content?',
        a: 'No, you can be a creator and earn regardless of whether you run a node.'
            + '<br /><br />However, running a node is super easy (it takes about the same space and RAM as a music player app). If you do, you will earn KOII that you can spend to register more content. You can pre-register to run a node here&#x3a; <a href="https://koii.me/KoiiNode" target="_blank">https://koii.me/KoiiNode</a>',
        cls: 'finnie9'
    },
    {
        q: "I uploaded an NFT to the leaderboard and every time I check it still has 0 views even though I've shared it to Twitter and my friends.",
        a: 'KOII has gradual consensus using Proof of Real Traffic (PoRT), your views will update in between 24-30 hours depending on the speed of the Arweave network. Please check out the lightpaper and proof of real traffic for more details.',
        cls: 'finnie10'
    },
    {
        q: 'Why is Arweave a better place for NFTs than Ethereum?',
        a: 'On Arweave, your content is stored permanently so it can never be rug-pulled. On Ethereum, if you have an image file (for example) that image is not actually stored on-chain. Only the transaction ID is stored there.'
            + '<br /><br />'
            + '<a href="https://koii.network/lightpaper.pdf" target="_blank">Read the Lightpaper</a>',
        cls: 'finnie11'
    },
    {
        q: 'I want to run a node!',
        a: '<a href="/form/pre-register" target="_blank">Sign up</a> here so you’ll be on the list to run a node as soon as it is ready.',
        cls: 'nodes0'
    },
    {
        q: 'Does running a node require high PC specs & computational power like ETH & BTC require?',
        a: "Nope. It'll be a lot like running an app like Spotify. You need less than 1GB of RAM, pre-register to run a node here&#x3a; <a href='/form/pre-register' target='_blank'>Pre-register form</a>",
        cls: 'nodes1'
    },
    {
        q: 'I have an app, how do I decentralize it?',
        a: 'There are a few places to get started. Koii-X is the UI template center where you can find easy-to-integrate components for things like connecting to Finnie, displaying NFTs, and distributing rewards.'
            + '<br />If you already have an app built. Koii Tasks allow you to use Koii nodes for microservices, all in a decentralized way.',
        cls: 'build0'
    },
    {
        q: 'What blockchains does Koii bridge to?',
        a: 'Koii has bridges up and running from Arweave to Ethereum and Polygon. We are currently developing bridges to Filecoin, Solana, and Avalanche, with more planned after that.'
            + '<br /><br />Do you have a chain you want Koii to integrate with? Tweet <a href="https://twitter.com/KoiiNetwork" target="_blank">@KoiiNetwork</a> to let us know which one with the tag &sharp;bridgetoKoii so that we can prioritize bridges based on the needs of the community.',
        cls: 'build1'
    },
    {
        q: 'I want to invest in Koii Network.',
        a: 'Sign up on the waitlist and you will be notified when the token is available to purchase. If you are looking for a partnership, fill out <a href="https://koii.network/form/partnership/" target="_blank">this form</a> as well.',
        cls: 'invest0'
    },
    {
        q: 'Where can I buy KOII?',
        a: 'KOII is not currently available for public sale. Sign up for the waitlist <a href="/form/investor" target="_blank">here</a>.',
        cls: 'token0'
    },
    {
        q: 'What are Attention Rewards and how do I get them?',
        a: 'Every day, the network distributes KOII tokens to all the content that received attention (or was interacted with) in the previous 24 hour period. The amount of tokens a wallet receives depends on the proportion of attention its content receives compared to all of the attention in the network.',
        cls: 'token1'
    },
    {
        q: 'How do I mine KOII tokens?',
        a: 'The only way to “mine” KOII tokens is by making content that receives attention. You will earn KOII tokens proportional to the amount of attention your content earns every 24 hours. You can earn tokens by <a href="/form/pre-register" target="_blank">running a node</a>, but those tokens are supplied by bounties from the Task creators, not the daily mint.',
        cls: 'token2'
    },
    {
        q: 'Why do I need two different kinds of tokens to make an NFT?',
        a: 'Since the KOII token is not yet available for public sale, AR tokens are necessary to pay the permanent, one-time, storage fees on Arweave. After KOII becomes available to the public, we will require only KOII tokens for interacting with the network.',
        cls: 'token3'
    },
    {
        q: 'I didn’t get any tokens from the faucet. What should I do?',
        a: 'Please fill out the form at <a href="/form/faucet" target="_blank">https://koii.me/faucet</a> and someone from our support team will respond within 24 hours.',
        cls: 'token4'
    },
    {
        q: 'What is the total supply of KOII?',
        a: 'There will be a genesis supply of 10 billion tokens. After that an additional 1 million KOII will be minted per day and distributed across the KOII network. You can only mine KOII by receiving Proofs of Real Traffic for content that you submit. You can find more details about inflation and token burn in the <a href="/tokenomics.pdf " target="_blank">tokenomics paper</a>.',
        cls: 'token5'
    },
    {
        q: 'I have not received my attention rewards, what should I do?',
        a: 'KOII has gradual consensus using Proof of Real Traffic(PoRT), attention rewards should be sent to you 24 hours after your views are confirmed. Please check out the <a href="/proofs-of-real-traffic.pdf" target="_blank">Lightpaper</a> and <a href="#" target="_blank">Proof of Real Traffic</a> for more details.',
        cls: 'token6'
    },
    {
        q: 'I have a great idea for a dApp to run on Koii. How can I get started?',
        a: 'Koii has a Fund that gives out KOII grants to help interesting projects get moving.',
        cls: 'partnerships0'
    },
]
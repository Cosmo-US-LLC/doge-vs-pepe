import HowItSecPlaceholder from "./Page/Home/HowItSecPlaceholder";

function App() {
  return (
    <div className="bg-[black] w-[100%] overflow-hidden">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PRQ324V5');`,
          }}
        />
      </head>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PRQ324V5"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      />
      <HowItSecPlaceholder />
    </div>
  );
}

export default App;
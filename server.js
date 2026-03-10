const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 8000;

// ============================================================
// Helper — send HTML file, 404 if missing
// ============================================================
function send(res, ...parts) {
  const filePath = path.join(__dirname, ...parts);
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).send(`Page not found: ${parts.join("/")}`);
  }
}

// ============================================================
// STATIC ASSETS (CSS, JS, Images — before named routes)
// ============================================================
app.use("/css",      express.static(path.join(__dirname, "css")));
app.use("/dist",     express.static(path.join(__dirname, "dist")));
app.use("/lib",      express.static(path.join(__dirname, "lib")));
app.use("/img",      express.static(path.join(__dirname, "img")));
app.use("/fonts",    express.static(path.join(__dirname, "fonts")));
app.use("/webfonts", express.static(path.join(__dirname, "webfonts")));
app.use("/js",       express.static(path.join(__dirname, "js")));

// ============================================================
// AUTH / LOGIN
// ============================================================
app.get("/",                   (req, res) => send(res, "Common", "logined.html"));
app.get("/login",              (req, res) => send(res, "Common", "logined.html"));
app.get("/Common/logined",     (req, res) => send(res, "Common", "logined.html"));
app.get("/superadmin_login",   (req, res) => send(res, "Common", "Superadmin.html"));
app.get("/Common/Superadmin",  (req, res) => send(res, "Common", "Superadmin.html"));
app.get("/signup",             (req, res) => send(res, "Common", "Signup.html"));
app.get("/Common/Logout",      (req, res) => send(res, "Common", "Logout.html"));

// ============================================================
// MAIN PAGES
// ============================================================
app.get("/index",              (req, res) => send(res, "Common", "index.html"));
app.get("/Common/index",       (req, res) => send(res, "Common", "index.html"));
app.get("/Common/index.html",  (req, res) => send(res, "Common", "index.html"));

app.get("/Common/Dashboard",   (req, res) => send(res, "Common", "Dashboard.html"));
app.get("/Common/Admin",       (req, res) => send(res, "Common", "Admin.html"));
app.get("/Common/Admin.html",  (req, res) => send(res, "Common", "Admin.html"));
app.get("/Common/Profile",     (req, res) => send(res, "Common", "Profile.html"));
app.get("/Common/Result",      (req, res) => send(res, "Common", "Result.html"));
app.get("/Common/Orders",      (req, res) => send(res, "Common", "Orders.html"));
app.get("/Common/RSC",         (req, res) => send(res, "Common", "RSC.html"));

// ============================================================
// MARKETS
// ============================================================
app.get("/Common/Markets",             (req, res) => send(res, "Common", "Markets.html"));
app.get("/Common/Markets.html",        (req, res) => send(res, "Common", "Markets.html"));
app.get("/Common/Market",              (req, res) => send(res, "Common", "Market.html"));
app.get("/Common/Market.html",         (req, res) => send(res, "Common", "Market.html"));
// Legacy hash-based market URL — redirect to Markets.html?id=
app.get("/Common/markets", (req, res) => {
  res.redirect(301, "/Common/Markets.html" + (req.query.id ? `?id=${req.query.id}` : ""));
});

app.get("/Markets/Liables",      (req, res) => send(res, "Markets", "Liables.html"));
app.get("/Markets/BetLocker",    (req, res) => send(res, "Markets", "BetLocker.html"));
app.get("/Markets/Games",        (req, res) => send(res, "Markets", "Games.html"));
app.get("/Markets/WorldCasino",  (req, res) => send(res, "Markets", "WorldCasino.html"));
app.get("/Markets/ExGames",      (req, res) => send(res, "Markets", "ExGames.html"));
app.get("/Markets/MarketsListN", (req, res) => send(res, "Markets", "MarketsListN.html"));
app.get("/Markets/FullPosition", (req, res) => send(res, "Markets", "FullPosition.html"));

// ============================================================
// ACCOUNTS
// ============================================================
app.get("/Accounts/Chart",    (req, res) => send(res, "Accounts", "Chart.html"));
app.get("/Accounts/Cash",     (req, res) => send(res, "Accounts", "Cash.html"));
app.get("/Accounts/Credit",   (req, res) => send(res, "Accounts", "Credit.html"));
app.get("/Accounts",          (req, res) => send(res, "Accounts", "Chart.html"));

// ============================================================
// USERS
// ============================================================
app.get("/Users/Create",  (req, res) => send(res, "Users", "Create.html"));
app.get("/Users/Edit",    (req, res) => send(res, "Users", "Create.html")); // reuse

// ============================================================
// REPORTS
// ============================================================
app.get("/Reports/BookDetail",  (req, res) => send(res, "Reports", "BookDetail.html"));
app.get("/Reports/Detail2",     (req, res) => send(res, "Reports", "Detail2.html"));
app.get("/Reports/DailyPl",     (req, res) => send(res, "Reports", "DailyPl.html"));
app.get("/Reports/Daily",       (req, res) => send(res, "Reports", "Daily.html"));
app.get("/Reports/FinalSheet",  (req, res) => send(res, "Reports", "FinalSheet.html"));
app.get("/Reports/Commission",  (req, res) => send(res, "Reports", "Commission.html"));

// ============================================================
// CUSTOMER
// ============================================================
app.get("/customer/wallet",      (req, res) => send(res, "Customer", "Wallet.html"));
app.get("/customer/Ledger",      (req, res) => send(res, "Customer", "Ledger.html"));
app.get("/customer/ProfitLoss",  (req, res) => send(res, "Customer", "ProfitLoss.html"));
app.get("/customer/Bets",        (req, res) => send(res, "Customer", "Bets.html"));
app.get("/customer/Profile",     (req, res) => send(res, "Customer", "Profile.html"));
app.get("/customer/Liable",      (req, res) => send(res, "Customer", "Liable.html"));
app.get("/customer/StarOrders",  (req, res) => send(res, "Customer", "StarOrders.html"));

// ============================================================
// GAMES / CASINO
// ============================================================
app.get("/Common/BetProGames",  (req, res) => send(res, "Common", "BetProGames.html"));
app.get("/Common/ExGames",      (req, res) => send(res, "Common", "ExGames.html"));
app.get("/Common/Games",        (req, res) => send(res, "Common", "Games.html"));
app.get("/Common/Dream",        (req, res) => send(res, "Common", "Dream.html"));
app.get("/Common/Galaxy",       (req, res) => send(res, "Common", "Galaxy.html"));

// ============================================================
// ALLOW direct .html access
// ============================================================
app.use(express.static(__dirname));

// ============================================================
// START
// ============================================================
app.listen(PORT, () => {
  console.log(`Frontend running at http://localhost:${PORT}`);
});

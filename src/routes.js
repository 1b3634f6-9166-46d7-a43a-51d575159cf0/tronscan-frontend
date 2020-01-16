import React from "react";
import { flatten } from "lodash";
import { Redirect } from "react-router-dom";
import { IS_MAINNET, NETURL } from "./constants";

import {
  HomeAsync,
  AboutAsync,
  AccountAsync,
  AccountsAsync,
  CopyrightAsync,
  DemoAsync,
  FaqAsync,
  ErrorAsync,
  FoundationAsync,
  LedgerHelpAsync,
  LiveAsync,
  MyTokenAsync,
  NodesAsync,
  NodeTesterAsync,
  ProposalDetailAsync,
  RepresentativesAsync,
  SingleChartAsync,
  ChartsAsync,
  StatisticsAsync,
  SystemAsync,
  Token20DetailAsync,
  TokenDetailAsync,
  TokenOverviewAsync,
  TokensCreateAsync,
  TokenAllAsync,
  TransactionViewerAsync,
  TronConvertToolAsync,
  TRONRatingAsync,
  VoteLiveAsync,
  VoteOverviewAsync,
  WalletWizardAsync,
  ContractCompilerAsync,
  Exchangetrc,
  SmartContract,
  Representative,
  BTTSupplyTemp,
  Blocks,
  Transactions,
  Transfers,
  Contracts,
  Notice,
  ContractTrans,
  Committee,
  Proposals,
  Block,
  Transaction,
  Address,
  DevelopersRewardAsync,
  TokensMarketsCreateAsync,
  TokensMarketsAddListAsync,
  Exchange20,
  ContractSourceCode,
  ContractUseServiceTerms,
  ContractLicense,
  RatingRule
} from "./components/async";

export const routes = [
  {
    path: "/",
    label: "home_page",
    // icon: "fas fa-home",
    pathKey: "/",
    icon: false,
    showInMenu: true,
    showSubMenu: false,
    showSubHeader: false,
    isExact: true,
    component: HomeAsync,
    strict: true
  },
  {
    path: "/blockchain",
    label: "blockchain",
    pathKey: "/blockchain",
    // icon: "fa fa-link",
    icon: false,
    component: () => <Redirect to="/blockchain/blocks" />,
    routes: [
      {
        label: "nodes",
        // icon: "fa fa-server",
        icon: false,
        path: "/blockchain/nodes",
        component: NodesAsync,
        showInMenu: true
        // showInMenu: IS_MAINNET?true:false,
      },
      {
        path: "/blockchain/blocks",
        label: "blocks",
        // icon: "fa fa-cubes",
        icon: false,
        component: Blocks
      },
      {
        // icon: "fas fa-handshake",
        icon: false,
        path: "/blockchain/transactions",
        label: "transactions",
        component: Transactions
      },
      {
        // icon: "fas fa-handshake",
        icon: false,
        path: "/blockchain/transactions/:date",
        label: "daily_transactions",
        component: Transactions,
        showInMenu: false
      },
      {
        // icon: "fa fa-exchange-alt",
        icon: false,
        path: "/blockchain/transfers",
        label: "transfers",
        component: Transfers
      },
      {
        path: "/blockchain/accounts",
        label: "accounts",
        // icon: "fa fa-users",
        icon: false,
        component: AccountsAsync
      },

      // {
      //   path: "/blockchain/contracts",
      //   label: "Verified_contracts",
      //   icon: "fa fa-file",
      //   component: Contracts,
      // },
      {
        label: "statistics",
        // icon: `fa fa-chart-pie`,
        icon: false,
        path: "/blockchain/stats",
        component: StatisticsAsync,
        showInMenu: IS_MAINNET ? true : false
      },
      {
        label: "statistics",
        // icon: `fa fa-chart-pie`,
        icon: false,
        path: "/blockchain/stats/:chartName",
        component: SingleChartAsync,
        showInMenu: false
      },
      {
        label: "statistics",
        // icon: `fa fa-chart-pie`,
        icon: false,
        path: "/blockchain/charts/:chartName",
        component: ChartsAsync,
        showInMenu: false
      },
      {
                label: "live",
                icon: `fa fa-bolt`,
                path: "/blockchain/live",
                component: LiveAsync,
                showInMenu: false
            }, // {
            //   label: "inter_tnxl",
            //   icon: `fa fa-random`,
            //   path: "/blockchain/ContractInter",
            //   component: ContractInter,
            //   showInMenu: false
            // },
            // {
            //     path: "/blockchain/foundation",
            //     label: "foundation",
            //     icon: "fa fa-address-book",
            //     showInMenu: IS_MAINNET ? true : false,
            //     component: FoundationAsync
            // }
        ]
    },
    {
        path: "/contracts",
        label: "contracts",
        icon: "fa fa-file-contract",
        component: () => <Redirect to="/contracts/contracts" />,
        routes: [
            {
                label: "contracts",
                icon: "fa fa-file",
                path: "/contracts/contracts",
                component: Contracts
            },
            {
                path: "/contracts/contract-triggers",
                label: "trigger",
                icon: "fa fa-users-cog",
                component: ContractTrans
            },
            {
                path: "/contracts/contract-compiler",
                label: "contract_deployment",
                icon: "fas fa-file-signature",
                component: ContractCompilerAsync,
                showInMenu: IS_MAINNET ? true : false
            },
            {
                path: "/contracts/contract-compiler/:type",
                label: "contract_verification",
                icon: "fas fa-file-signature",
                component: ContractCompilerAsync,
                showInMenu: false
            },
            {
                label: "contracts_source-code-usage-terms",
                icon: "fa fa-file",
                path: "/contracts/source-code-usage-terms",
                component: ContractSourceCode,
                showInMenu: false
            },
            {
                label: "contracts_terms",
                icon: "fa fa-file",
                path: "/contracts/terms",
                component: ContractUseServiceTerms,
                showInMenu: false
            },
            {
                label: "contracts_license",
                icon: "fa fa-file",
                path: "/contracts/license",
                component: ContractLicense,
                showInMenu: false
      }
    ]
  },
  {
    path: "/block/:id",
    label: "block",
    component: Block,
    showInMenu: false
  },
  {
    path: "/transaction/:hash",
    label: "signature_details",
    component: Transaction,
    showInMenu: false
  },
  {
    path: "/address/:id",
    label: "contract_code_overview_account",
    component: Address,
    showInMenu: false
  },
  {
    path: "/representative/:id",
    label: "representative",
    component: Representative,
    showInMenu: false
  },
  {
    path: "/contract/:id",
    label: "contract",
    component: SmartContract,
    showInMenu: false
  },
  {
    path: "/tokens",
    label: "tokens",
    pathKey: "/tokens",
    // icon: "fas fa-coins",
    icon: false,
    component: TokenOverviewAsync,
    routes: [
      // {
      //   label: "overview_TRC20",
      //   path: "/tokens/trc20",
      //   icon: "fas fa-table",
      //   component: TokenTRC20ListAsync
      // },
      // "-",
      // {
      //   label: "overview_TRC10",
      //   path: "/tokens/list",
      //   icon: "fa fa-list",
      //   component: TokenListAsync
      // },
      {
        label: "token_overview",
        path: "/tokens/list",
        // icon: "fa fa-list",
        icon: false,
        component: TokenAllAsync
      },
      // {
      //   label: "participate",
      //   path: "/tokens/view",
      //   icon: "fas fa-coins",
      //   component: TokenOverviewAsync,
      //   showInMenu: IS_MAINNET ? true : false
      // },
      {
        label: "token_input",
        path: "/tokens/create",
        // icon: "fa fa-plus-square",
        icon: false,
        component: TokensCreateAsync,
        showInMenu: IS_MAINNET ? true : false
      },
      {
        path: "/tokens/create/:step",
        component: TokensCreateAsync,
        showInMenu: false
      },
      {
        label: "update_token",
        path: "/tokens/update/:id",
        // icon: "fa fa-plus-square",
        icon: false,
        component: TokensCreateAsync,
        showInMenu: false
      },
      {
        label: "token_markets_input",
        path: "/tokens/markets/add/:page/:tokenId/:id",
        // icon: "fa fa-plus-square",
        icon: false,
        component: TokensMarketsAddListAsync,
        showInMenu: false
      },
      {
        label: "token_markets_input",
        path: "/tokens/markets/create/:type/:id",
        // icon: "fa fa-plus-square",
        icon: false,
        component: TokensMarketsCreateAsync,
        showInMenu: false
      },
      {
        /* Write two is to solve the updated copy */
        label: "token_markets_update",
        path: "/tokens/markets/:page/:type/:id",
        // icon: "fa fa-plus-square",
        icon: false,
        component: TokensMarketsCreateAsync,
        showInMenu: false
      },
      {
        label: "token_rating_rule",
        path: "/tokens/rating-rule",
        // icon: "fa fa-plus-square",
        icon: false,
        component: RatingRule,
        showInMenu: false
      }
    ]
  },
  {
    path: "/token/:id",
    label: "token_detail",
    component: TokenDetailAsync,
    showInMenu: false
  },
  {
    path: "/token20/:address",
    label: "token_detail",
    component: Token20DetailAsync,
    showInMenu: false
  },
  {
    label: "update_token",
    component: MyTokenAsync,
    path: "/myToken",
    showInMenu: false
  },
  {
    label: "TRONRating",
    component: TRONRatingAsync,
    path: "/rating",
    showInMenu: false
  },
  // {
  //   path: "/Poloni DEX",
  //   label: "Poloni DEX",
  //   icon: "fas fa-rocket",
  //   enurl: "https://poloniex.org",
  //   zhurl: "https://poloniex.org",
  //   linkHref: true
  // },
  // {
  //   label: "DEX10",
  //   path: "/exchange",
  //   icon: "fas fa-exchange-alt",
  //   component: Exchange,
  //   showInMenu: false,
  //   none: true
  // },
    // {
  //   path: "/network",
  //   label: "nav_network",
  //   icon: "fas fa-project-diagram",
  //   routes: [
  //     [
  //       "sun_network_product",
  //       {
  //         url: NETURL.SUNNET,
  //         icon: "fas fa-columns",
  //         label: "sun_network_DAppChain"
  //       }
  //     ],
  //     [
  //       "sun_network_relevant_information",
  //       {
  //         url: "https://tron.network/sunnetwork/#/",
  //         icon: "fa fa-globe",
  //         label: "sun_network_project_introduction"
  //       },
  //       {
  //         url: "https://tron.network/sunnetwork/doc/guide/",
  //         icon: "fa fa-book",
  //         label: "sun_network_development_document"
  //       },
  //       {
  //         url:
  //           "https://support.tronscan.org/hc/en-us/articles/360035944072-SUN-Network-Developer-Challenge-Starts",
  //         icon: "fas fa-award",
  //         label: "developer_challenge"
  //       }
  //     ]
  //   ]
  // },
  // {
  //   label: "Poloni DEX",
  //   path: "/exchange/trc20",
  //   icon: "fas fa-exchange-alt",
  //   component: Exchange20,
  //   isExact: true,
  //   none: true,
  //   showInMenu: IS_MAINNET ? true : false
  // },
  // {
  //   label: "Poloni DEX",
  //   path: "/exchange/:type",
  //   redirect: "/exchange/trc20",
  //   icon: "fas fa-exchange-alt",
  //   component: Exchangetrc,
  //   none: true
  // },
  {
    label: "DAPP",
    path: "/dapp",
    // icon: "fas fa-gamepad",
    icon: false,
    component: null,
    pathKey: "/dapp",
    showInMenu: IS_MAINNET ? true : false,
    routes: [
      // {
      //     url: "https://www.tronace.com/?utm_source=TS",
      //     icon: "fas fa-dollar-sign",
      //     label: "TRONAce"
      // },
      // {
      //     url: "https://www.tronbet.io/#/?utm_source=TS",
      //     icon: "fas fa-dice-six",
      //     label: "TRONbet"
      // },
      {
        url: "https://tronlending.org/?utm_source=TS",
        // icon: "fas fa-hand-holding-usd",
        icon: false,
        label: "TronLending"
      },
      {
        url: "https://dappradar.com/rankings/protocol/tron",
        // icon: "fab fa-dochub",
        icon: false,
        label: "DAppradar"
      },
      {
        url:
          "https://dapp.review/explore/tron?gclid=EAIaIQobChMIx-fB8KH04QIVlHZgCh0ybA1hEAAYASAAEgIad_D_BwE",
        // icon: "fas fa-crop-alt",
        icon: false,
        label: "Dappreview"
      }
    ]
  },
  {
    label: "notice",
    path: "/notice/:id",
    //icon: "fas fa-exchange-alt",
    icon: false,
    component: Notice,
    showInMenu: false
  },
  {
    label: "TRONSR",
    path: "/sr",
    // icon: "fas fa-chess-queen",
    icon: false,
    pathKey: "/sr",
    component: RepresentativesAsync,
    routes: [
      {
        label: "representatives",
        path: "/sr/representatives",
        // icon: "fa fa-rocket",
        icon: false,
        component: RepresentativesAsync
      },
      {
        label: "votes",
        path: "/sr/votes",
        // icon: "fas fa-comment",
        icon: false,
        component: VoteOverviewAsync,
        showInMenu: IS_MAINNET ? true : false
      },
      {
        label: "committee",
        path: "/sr/committee",
        // icon: "fas fa-users",
        icon: false,
        component: Committee
      }
    ]
  },
  {
    path: "/votes-live",
    label: "live",
    // icon: "fas fa-comment",
    icon: false,
    component: VoteLiveAsync,
    showInMenu: false
  },
  {
    path: "/account",
    label: "account",
    showInMenu: false,
    component: AccountAsync
  },
  {
    path: "/proposals",
    label: "commission_proposed",
    component: Proposals,
    showInMenu: false
  },
  {
    path: "/proposal/:id",
    label: "commission_proposed",
    component: ProposalDetailAsync,
    showInMenu: false
  },
  {
    path: "/tools",
    label: "tools",
    // icon: "fa fa-wrench",
    icon: false,
    component: null,
    showInMenu: false,
    routes: [
      // {
      //   label: "verify_contract_code",
      //   path: "/tools/verify-contract-code",
      //   icon: "fa fa-check-square",
      //   component: VerifyContractCodeAsync,
      // },
      {
        label: "transaction_viewer",
        path: "/tools/transaction-viewer",
        // icon: "fa fa-eye",
        icon: false,
        component: TransactionViewerAsync
      },
      // {
      //   label: "node_tester",
      //   path: "/tools/node-tester",
      //   icon: "fa fa-server",
      //   component: NodeTesterAsync
      // },
      {
        label: "tron_convert_tool",
        path: "/tools/tron-convert-tool",
        // icon: "fa fa-random",
        icon: false,
        component: TronConvertToolAsync
      },
      {
        path: "/tools/system",
        // icon: "fa fa-database",
        icon: false,
        label: "system",
        component: SystemAsync
      },
      {
        url: "https://github.com/tronscan/tronscan-desktop/releases",
        // icon: "fa fa-download",
        icon: false,
        label: "desktop_explorer"
      },
      {
        url: "https://explorer.shasta.trongrid.io",
        // icon: "fa fa-link",
        icon: false,
        label: "link_test_server"
      },
      {
        url: "https://www.trongrid.io/shasta",
        // icon: "fa fa-recycle",
        icon: false,
        label: "link_test_fauct"
      }
    ]
  },
  {
    path: "/help",
    label: "help",
    // icon: "fa fa-question",
    icon: false,
    pathKey: 24,
    component: null,
    showInMenu: false,
    routes: [
      "TRON",
      {
        url: "https://dn-peiwo-web.qbox.me/What_is_TRON1.4.pdf",
        label: "what_is_tron"
      },
      "-",
      "Tronscan",
      {
        label: "frequently_asked_questions",
        component: FaqAsync,
        path: "/help/faq"
      },
      // {
      //   label: "copyright",
      //   component: CopyrightAsync,
      //   path: "/help/copyright",
      //   showInMenu: false
      // },
      {
        label: "about",
        component: AboutAsync,
        path: "/help/about",
        showInMenu: false
      },
      {
        label: "ledger_guide",
        component: LedgerHelpAsync,
        path: "/help/ledger"
      },
      { url: "https://t.me/tronscan", label: "telegram_updates" },
      "-",
      "Community",
      { url: "https://www.reddit.com/r/tronix", label: "reddit" },
      { url: "https://t.me/tronscantalk", label: "telegram" },
      "-",
      "Development",
      {
        url:
          "https://github.com/tronscan/tronscan-frontend/blob/dev2019/document/api.md",
        label: "tron_explorer_api"
      },
      {
        url:
          "https://dn-peiwo-web.qbox.me/Design_Book_of_TRON_Architecture1.4.pdf",
        label: "tron_architechure"
      },
      {
        url:
          "https://dn-peiwo-web.qbox.me/TRON%20Protobuf%20Protocol%20Document.pdf",
        label: "tron_protobuf_doc"
      },
      "-",
      "Feedback",
      {
        url: "https://github.com/tronscan/tronscan-frontend/issues/new",
        label: "report_an_error"
      }
    ]
  },
  // {
  //   path: "/more",
  //   label: "nav_more",
  //   icon: "fas fa-indent",
  //   routes: [
  //     {
  //       path: "/markets",
  //       label: "markets",
  //       icon: "fa fa-chart-line", // component: MarketsAsync
  //       enurl: "https://coinmarketcap.com/currencies/tron/",
  //       zhurl: "https://coinmarketcap.com/zh/currencies/tron/",
  //       linkHref: true
  //     },
  //     {
  //       path: "/more/list_trx",
  //       label: "list_trx",
  //       icon: "fa fa-plus",
  //       enurl: "https://tron.network/exchangesList?lng=en",
  //       zhurl: "https://tron.network/exchangesList?lng=zh",
  //       linkHref: true
  //     }
  //   ]
  // },
  {
    path: "/more",
    pathKey: "/more",
    label: "nav_more",
    // icon: "fas fa-indent",
    icon: false,
    routes: [
      [
        "tools",
        {
          path: "/tools/system",
          icon: "fa fa-database",
          label: "system",
          component: SystemAsync
        },
        {
          label: "transaction_viewer",
          path: "/tools/transaction-viewer",
          icon: "fa fa-eye",
          component: TransactionViewerAsync
        },
        {
          label: "tron_convert_tool",
          path: "/tools/tron-convert-tool",
          icon: "fa fa-random",
          component: TronConvertToolAsync
        }
        // {
        //   label: "node_tester",
        //   path: "/tools/node-tester",
        //   icon: "fa fa-server",
        //   component: NodeTesterAsync
        // }
        // {
        //     url: "https://github.com/tronscan/tronscan-desktop/releases",
        //     icon: "fa fa-download",
        //     label: "desktop_explorer"
        // },
      ],
      [
        "Documentation",
        {
          url: "https://tron.network/static/doc/white_paper_v_2_0.pdf",
          icon: false,
          label: "what_is_tron"
        },
        {
          url:
            "https://dn-peiwo-web.qbox.me/Design_Book_of_TRON_Architecture1.4.pdf",
          icon: false,
          label: "tron_architechure"
        },
        {
          url:
            "https://github.com/tronscan/tronscan-frontend/blob/dev2019/document/api.md",
          icon: false,
          label: "tron_explorer_api"
        },
        {
          url:
            "https://dn-peiwo-web.qbox.me/TRON%20Protobuf%20Protocol%20Document.pdf",
          icon: false,
          label: "tron_protobuf_doc"
        }

        // {
        //     label: "copyright",
        //     component: CopyrightAsync,
        //     path: "/help/copyright",
        //     showInMenu: false
        // },
        // {
        //     label: "about",
        //     component: AboutAsync,
        //     path: "/help/about",
        //     showInMenu: false
        // },
        // {
        //     label: "ledger_guide",
        //     component: LedgerHelpAsync,
        //     path: "/help/ledger"
        // },
        // {
        //     url: "https://t.me/tronscan",
        //     label: "telegram_updates"
        // },
        // {   url: "https://www.reddit.com/r/tronix",
        //     label: "reddit"
        // },
        // {   url: "https://t.me/tronscantalk",
        //     label: "telegram"
        // },
        // {
        //     url: "https://github.com/tronscan/tronscan-frontend/issues/new",
        //     label: "report_an_error"
        // }
      ],
      [
        "testnet",
        {
          url: "https://nile.tronscan.org",
          icon: false,
          label: "NILE TESTNET",
          sidechain: false
        },
        {
          url: "https://shasta.tronscan.org",
          icon: false,
          label: "SHASTA TESTNET",
          sidechain: false
        }
      ],
      [
        "tools",
        {
          path: "/tools/system",
          icon: false,
          label: "system",
          component: SystemAsync
        },
        {
          label: "transaction_viewer",
          path: "/tools/transaction-viewer",
          icon: false,
          component: TransactionViewerAsync
        },
        {
          label: "tron_convert_tool",
          path: "/tools/tron-convert-tool",
          icon: false,
          component: TronConvertToolAsync
        }
        // {
        //   label: "node_tester",
        //   path: "/tools/node-tester",
        //   icon: "fa fa-server",
        //   component: NodeTesterAsync
        // }
        // {
        //     url: "https://github.com/tronscan/tronscan-desktop/releases",
        //     icon: "fa fa-download",
        //     label: "desktop_explorer"
        // },
      ],
      [
        "Other",
        // {
        //   url: "https://shasta.tronscan.org",
        //   icon: "fa fa-link",
        //   label: "link_test_server",
        //   sidechain: false
        // },
                {
                    url: "http://nileex.io/join/getJoinPage",
                    icon: "fa fa-recycle",
                    label: "link_test_fauct",
                    sidechain: false
                },

        // {
        //   url: "https://dapphouse.org",
        //   icon: "fa fa-archive",
        //   label: "DApps"
        // },
        {
          path: "/markets",
          label: "markets",
          icon: false, // component: MarketsAsync
          enurl: "https://coinmarketcap.com/currencies/tron/",
          zhurl: "https://coinmarketcap.com/zh/currencies/tron/",
          linkHref: true
        },
        {
          path: "/more/list_trx",
          label: "list_trx",
          icon: false,
          enurl: "https://tron.network/exchangesList?lng=en",
          zhurl: "https://tron.network/exchangesList?lng=zh",
          linkHref: true
        },
        {
          label: "frequently_asked_questions",
          icon: false,
          component: FaqAsync,
          path: "/help/faq"
        },
        {
          label: "ledger_guide",
          icon: false,
          component: LedgerHelpAsync,
          path: "/help/ledger"
        }
        // {
        //   icon: "fas fa-columns",
        //   label: "Main_Chain",
        //   sidechain:true,
        // },
      ]
    ]
  },
  // {
  //     path: "/more",
  //     label: "NewMore",
  //     icon: "fas fa-indent",
  //     routes: [
  //         {
  //             path: "/markets",
  //             label: "markets",
  //             icon: "fa fa-chart-line", // component: MarketsAsync
  //             enurl: "https://coinmarketcap.com/currencies/tron/",
  //             zhurl: "https://coinmarketcap.com/zh/currencies/tron/",
  //             linkHref: true
  //         },
  //         {
  //             path: "/more/list_trx",
  //             label: "list_trx",
  //             icon: "fa fa-plus",
  //             enurl: "https://tron.network/exchangesList?lng=en",
  //             zhurl: "https://tron.network/exchangesList?lng=zh",
  //             linkHref: true
  //         }
  //     ]
  // },
  {
    path: "/wallet/new",
    label: "wallet",
    showInMenu: false,
    component: WalletWizardAsync
  },
  {
    path: "/demo",
    label: "demo",
    showInMenu: false,
    showSubMenu: false,
    showSubHeader: false,
    component: DemoAsync
  },
  {
    path: "/test/btt/supply",
    label: "supply",
    showInMenu: false,
    showSubMenu: false,
    showSubHeader: false,
    component: BTTSupplyTemp
  },
  {
    path: "/error",
    showInMenu: false,
    showSubMenu: false,
    showSubHeader: false,
    component: ErrorAsync
  },
  {
    path: "/developersReward",
    label: "developers_scored_users",
    // icon: "fa fa-users",
    icon: false,
    showInMenu: false,
    component: DevelopersRewardAsync
  }
];

export const flatRoutes = flatten(
    routes.map(route => [...(route.routes || []), route])
);

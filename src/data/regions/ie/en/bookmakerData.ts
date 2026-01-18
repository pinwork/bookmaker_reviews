// src/data/regions/ie/en/bookmakerData.ts
import { RegionalBookmakerData } from '../../../../types';

export const ieBookmakerData: Record<string, RegionalBookmakerData> = {
  'bet365': {
    website: 'https://www.bet365.com',
    affiliateLink: 'https://www.bet365.com/olp/open-account?affiliate=365_00935375',
    promotionsPage: '',
    payments: ['debit-cards', 'paypal', 'apple-pay', 'google-pay', 'bank-transfer', 'skrill', 'neteller', 'paysafecard'],
    license: '1010869 (Revenue Commissioners)'
  },
  'betfair': {
    website: 'https://www.betfair.com/ie',
    affiliateLink: 'https://promotions.betfair.com/sports-acq-uk-bau-direct-b10-g50-sbk-mpbb?utm_medium=Partnerships&utm_source=25999&utm_campaign=276238&utm_content=9491088&utm_ad=369307&clkID=8000041_23414ea08f7249548dae168898a97f6a&rfr=8000041&ttp=111&pid=17680103&bid=1645',
    promotionsPage: 'https://promos.betfair.com/',
    payments: ['debit-cards', 'apple-pay', 'paypal', 'bank-transfer', 'instant-bank-transfer'],
    license: '1011281 (Revenue Commissioners)'
  },
  'william-hill': {
    website: 'https://www.williamhill.com',
    affiliateLink: 'https://campaigns.williamhill.com/lpc/en/bet-10-get-30?affiliateId=123456',
    promotionsPage: 'https://promotions.williamhill.com/en-gb/betting',
    payments: ['debit-cards', 'paypal', 'apple-pay', 'paysafecard', 'bank-transfer'],
    license: '1010774 (Revenue Commissioners)'
  },
  'paddy-power': {
    website: 'https://www.paddypower.com',
    affiliateLink: 'https://promotions.paddypower.com/ads-sbk-mkt-gent-direct-b10g40-v2?utm_medium=Partnerships&utm_source=25999',
    promotionsPage: 'https://promotions.paddypower.com/',
    payments: ['debit-cards', 'paypal', 'apple-pay', 'bank-transfer'],
    license: '1011281 (Revenue Commissioners)'
  },
  'sky-bet': {
    website: 'https://www.skybet.com',
    affiliateLink: 'https://www.skybet.com/go/event/31846175?aff=12345',
    promotionsPage: 'https://www.skybet.com/promotions',
    payments: ['debit-cards', 'apple-pay', 'google-pay'],
    license: '1011523 (Revenue Commissioners)'
  },
  'betfred': {
    website: 'https://www.betfred.com',
    affiliateLink: 'https://active.betfred.com/registration?btag=a_6890b_1c_',
    promotionsPage: 'https://www.betfred.com/promotions/sports',
    payments: ['debit-cards', 'paypal', 'neteller', 'skrill', 'paysafecard', 'bank-transfer'],
    license: '1010512 (Revenue Commissioners)'
  },
  '888sport': {
    website: 'https://www.888sport.com',
    affiliateLink: 'https://www.888sport.com/promo/bet-10-get-30/?affiliate=1234',
    promotionsPage: 'https://www.888sport.com/promotions/',
    payments: ['debit-cards', 'paypal', 'apple-pay', 'trustly', 'bank-transfer'],
    license: '1011232 (Revenue Commissioners)'
  },
  'unibet': {
    website: 'https://www.unibet.ie',
    affiliateLink: 'https://www.unibet.ie/registration?btag=a_6890b_1c_',
    promotionsPage: 'https://www.unibet.ie/promotions',
    payments: ['debit-cards', 'paypal', 'apple-pay', 'skrill', 'neteller', 'trustly', 'bank-transfer'],
    license: '1013174 (Revenue Commissioners)'
  },
  'betvictor': {
    website: 'https://www.betvictor.com/en-ie/',
    affiliateLink: 'https://www.betvictor.com/en-ie/sports?affiliate=1234',
    promotionsPage: 'https://www.betvictor.com/en-ie/offers',
    payments: ['debit-cards', 'paypal', 'apple-pay', 'bank-transfer'],
    license: '1010233 (Revenue Commissioners)'
  },
  'boylesports': {
    website: 'https://www.boylesports.com',
    affiliateLink: 'https://www.boylesports.com/promotions/bet-10-get-30?affiliate=1234',
    promotionsPage: 'https://www.boylesports.com/promotions',
    payments: ['debit-cards', 'paypal', 'apple-pay', 'google-pay', 'skrill', 'neteller', 'paysafecard'],
    license: '1010411 (Revenue Commissioners)'
  },
  'virgin-bet': {
    website: 'https://www.virginbet.com/ie/',
    affiliateLink: 'https://www.virginbet.com/registration?affiliate=1234',
    promotionsPage: 'https://www.virginbet.com/promotions',
    payments: ['debit-cards', 'paypal', 'apple-pay', 'trustly', 'bank-transfer'],
    license: '1017303 (Revenue Commissioners)'
  },
  'betway': {
    website: 'https://www.betway.com',
    affiliateLink: 'https://www.betway.com/en-ie/sports?s=bw182393',
    promotionsPage: '',
    payments: ['debit-cards', 'paypal', 'apple-pay', 'bank-transfer'],
    license: '1011400 (Revenue Commissioners)'
  },
  'matchbook': {
    website: 'https://www.matchbook.com',
    affiliateLink: 'https://www.matchbook.com/offers/welcome?btag=a_6890b_4c_',
    promotionsPage: 'https://www.matchbook.com/promotions/exchange',
    payments: ['debit-cards', 'bank-transfer', 'trustly'],
    license: '1011270 (Revenue Commissioners)'
  },
  'netbet': {
    website: 'https://www.netbet.com',
    affiliateLink: 'https://www.netbet.com/sport?btag=a_6890b_1c_',
    promotionsPage: 'https://sport.netbet.com/promotions/',
    payments: ['debit-cards', 'paypal', 'skrill', 'neteller', 'paysafecard', 'bank-transfer'],
    license: '1010361 (Revenue Commissioners)'
  },
  'smarkets': {
    website: 'https://smarkets.com',
    affiliateLink: 'https://smarkets.com/signup?promo=COMMFREE',
    promotionsPage: 'https://help.smarkets.com/hc/en-gb/sections/200455845-Promotions',
    payments: ['debit-cards', 'paypal', 'trustly', 'bank-transfer'],
    license: '1011245 (Revenue Commissioners)'
  },
  'coral': {
    website: 'https://www.coral.ie',
    affiliateLink: 'https://sports.coral.ie/lp/bet-5-get-20?affiliate=1234',
    promotionsPage: 'https://sports.coral.ie/promotions',
    payments: ['debit-cards', 'paypal', 'apple-pay', 'paysafecard', 'bank-transfer'],
    license: '1011555 (Revenue Commissioners)'
  },
  'ladbrokes': {
    website: 'https://www.ladbrokes.ie',
    affiliateLink: 'https://sports.ladbrokes.ie/lp/bet-5-get-20?affiliate=1234',
    promotionsPage: 'https://sports.ladbrokes.ie/promotions',
    payments: ['debit-cards', 'paypal', 'apple-pay', 'paysafecard', 'bank-transfer'],
    license: '1011555 (Revenue Commissioners)'
  },
  'bwin': {
    website: 'https://www.bwin.com',
    affiliateLink: 'https://sports.bwin.com/en/sports?affiliate=1234',
    promotionsPage: 'https://sports.bwin.com/en/sports/promotions',
    payments: ['debit-cards', 'paypal', 'apple-pay', 'trustly', 'bank-transfer'],
    license: '1011589 (Revenue Commissioners)'
  }
};

import type { LimitedTimeOfferFragmentResponse } from '../graphql/fragments';

// offers の中身の例
// endDate: "1970-01-10T14:00:00+00:00"
// id: 1303
// price: 1629
// startDate: "1970-01-10T12:00:00+00:00"

export function getActiveOffer(
  offers: LimitedTimeOfferFragmentResponse[],
): LimitedTimeOfferFragmentResponse | undefined {
  const activeOffer = offers.find((offer) => {
    const now = new Date();
    const startDate = new Date(offer.startDate);
    const endDate = new Date(offer.endDate);

    return startDate < now && now < endDate;
  });

  return activeOffer;
}

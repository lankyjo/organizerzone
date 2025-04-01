export function checkEventType(
  eventType: string,
  venue: {
    onlineVenue: { platform?: string; url?: string; additionalInfo?: string };
    primaryVenue: {
      address?: string;
      city?: string;
      state?: string;
      country?: string;
    };
  }
): { venue: string; link: string } {
  switch (eventType?.toLowerCase()) {
    case "physical":
      return {
        venue: `${
          venue.primaryVenue.address ? venue.primaryVenue.address : ""
        } ${venue.primaryVenue.city ? venue.primaryVenue.city : ""}, ${
          venue.primaryVenue.state ? venue.primaryVenue.state : ""
        }, ${venue.primaryVenue.country ? venue.primaryVenue.country : ""}`,
        link: "",
      };
    case "online":
      return {
        venue: `Online via ${
          venue.onlineVenue.platform ? venue.onlineVenue.platform : ""
        }`,
        link: `${venue.onlineVenue.url ? venue.onlineVenue.url : ""}`,
      };
    case "hybrid":
      return {
        venue: ` ${venue.primaryVenue.state ? venue.primaryVenue.state : ""}, ${
          venue.primaryVenue.country ? venue.primaryVenue.country : ""
        } & Online`,
        link: "",
      };

    default:
      return {
        venue: `No location info`,
        link: "",
      };
  }
}

export const imagePlaceholder =
  "https://res.cloudinary.com/isreal/image/upload/v1715899457/comedy_slide_ycjs84.jpg";

export const unavailable = "";

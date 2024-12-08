import { eventsData } from '../../../data/events';
import HeroSection from '../../components/sections/HeroSection';
import EventDetailClient from './EventDetailClient';

export async function generateStaticParams() {
  return eventsData.map((event) => ({
    id: event.id.toString(),
  }));
}

export default async function EventDetail({ params }) {
  const eventId = await params.id;
  const event = eventsData.find(e => e.id === parseInt(eventId));

  if (!event) {
    return <div>Event not found</div>;
  }

  const galleryImages = Array.from({ length: event.gallerySize || 0 }, (_, index) => ({
    id: index,
    src: `/assets/events/gallery/${eventId}/${index + 1}.jpeg`,
    alt: `Gallery Image ${index + 1}`,
  }));

  return (
    <main className="min-h-screen">
      <HeroSection
        title={event.title}
        description={event.description}
        className="bg-gradient-to-br from-secondary-900 to-secondary-800"
      />
      <EventDetailClient event={event} galleryImages={galleryImages} />
    </main>
  );
}
'use client'
import { useState } from 'react';
import HeroSection from '../components/sections/HeroSection';
import { eventsData } from '../../data/events';
import EventCard from '../components/cards/EventCard';

export default function Events() {
    const [showPastEvents, setShowPastEvents] = useState(true);

    const currentDate = new Date();
    const filteredEvents = eventsData.filter(event => {
        const eventDate = new Date(event.date);
        return showPastEvents ? eventDate < currentDate : eventDate >= currentDate;
    });

    return (
        <main>
            <HeroSection
                title="SCC"
                highlightedText="Events Directory"
                description="Explore our journey through various events and initiatives that shape our community."
            />

            <section className="py-32 bg-white/80">
                <div className="container mx-auto px-6">
                    <div className="flex justify-center mb-8">
                        <div className="bg-white rounded-full p-1 shadow-md">

                            <button
                                onClick={() => setShowPastEvents(true)}
                                className={`px-6 py-2 rounded-full transition-all ${showPastEvents ? 'bg-primary-500 text-white' : 'text-secondary-600'}`}
                            >
                                Past Events
                            </button>
                            {/* <button
                                onClick={() => setShowPastEvents(false)}
                                className={`px-6 py-2 rounded-full transition-all ${!showPastEvents ? 'bg-primary-500 text-white' : 'text-secondary-600'}`}
                            >
                                Upcoming Events
                            </button> */}

                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {filteredEvents.sort((a, b) => new Date(b.date) - new Date(a.date)).map((event, index) => (
                            <EventCard key={event.id} event={event} index={index} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

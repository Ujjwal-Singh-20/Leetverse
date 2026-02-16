import { motion } from 'framer-motion';
import { MENTORS_DATA } from '../data';
import { User } from 'lucide-react';

const Mentors = () => {
    return (
        <section id="mentors" className="py-24 px-4 bg-background-secondary">
            <div className="max-w-5xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-5xl font-bold mb-4">OUR <span className="text-accent underline decoration-accent/30 underline-offset-8">MENTORS</span></h2>
                    <p className="text-text-secondary font-mono">Industry Experts & Academic Leads</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {MENTORS_DATA.map((mentor, index) => (
                        <motion.div
                            key={mentor.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative p-8 border border-white/5 bg-background hover:border-accent/30 transition-all duration-500 overflow-hidden"
                        >
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <User className="text-accent w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-1 group-hover:text-accent transition-colors">{mentor.name}</h3>
                                <p className="text-accent font-mono text-xs uppercase tracking-widest mb-4">{mentor.role}</p>
                                <div className="h-[1px] w-0 bg-accent group-hover:w-full transition-all duration-500 mb-4" />
                                <p className="text-text-secondary text-sm leading-relaxed">{mentor.special}</p>
                            </div>

                            {/* Decorative Corner */}
                            <div className="absolute top-0 right-0 w-8 h-8 flex overflow-hidden">
                                <div className="absolute top-0 right-0 w-[40px] h-[40px] bg-accent/10 rotate-45 translate-x-1/2 -translate-y-1/2 group-hover:bg-accent/20 transition-colors" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Mentors;

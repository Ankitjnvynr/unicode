import React from 'react';
import { person, social, newsletter, home, about, blog, work, gallery } from '@/content'; // Adjust path as necessary
import { Background } from '@/Background'; // Adjust path if needed

const TestComponent = () => {
    return (
        <div className="relative p-5">
            {/* Background Component */}
            <Background
                position="fixed"
                gradient={{ display: true, opacity: 0.5 }}
                dots={{ display: true, opacity: 0.3, color: 'brand-on-background-weak', size: '16' }}
                lines={{ display: true, opacity: 0.1, size: '20' }}
                mask="cursor"
                className="z-0"
            />

            {/* Main Content */}
            <div className="relative z-10">
                {/* Home Section */}
                <section className="mb-10">
                    <h1 className="text-4xl font-bold">{home.title}</h1>
                    <p className="text-lg mt-2">{home.description}</p>
                    <h2 className="text-2xl font-semibold mt-5">{home.headline}</h2>
                    <p className="text-base mt-2">{home.subline}</p>
                </section>

                {/* About Section */}
                {about.label && (
                    <section className="mb-10">
                        <h2 className="text-3xl font-bold">{about.title}</h2>
                        <p className="text-lg mt-2">{about.description}</p>

                        {/* Display Table of Contents */}
                        {about.tableOfContent.display && (
                            <div className="mt-5">
                                <h3 className="text-xl font-semibold">Table of Contents</h3>
                                <p>Sub-items: {about.tableOfContent.subItems ? "Yes" : "No"}</p>
                            </div>
                        )}

                        {/* Display Intro */}
                        {about.intro.display && (
                            <div className="mt-5">
                                <h3 className="text-xl font-semibold">{about.intro.title}</h3>
                                <p className="text-base">{about.intro.description}</p>
                            </div>
                        )}

                        {/* Display Work Experience */}
                        {about.work.display && (
                            <div className="mt-5">
                                <h3 className="text-xl font-semibold">{about.work.title}</h3>
                                {about.work.experiences.map((exp, index) => (
                                    <div key={index} className="mt-3">
                                        <h4 className="font-bold">{exp.company}</h4>
                                        <p className="text-sm">{exp.timeframe} - {exp.role}</p>
                                        {exp.achievements.map((achievement, idx) => (
                                            <p key={idx} className="text-base mt-1">{achievement}</p>
                                        ))}
                                        {exp.images && exp.images.map((img, imgIndex) => (
                                            <img key={imgIndex} src={img.src} alt={img.alt} className="w-40 h-auto mt-2" />
                                        ))}
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Display Studies */}
                        {about.studies.display && (
                            <div className="mt-5">
                                <h3 className="text-xl font-semibold">{about.studies.title}</h3>
                                {about.studies.institutions.map((institution, index) => (
                                    <div key={index} className="mt-2">
                                        <p className="font-semibold">{institution.name}</p>
                                        <p className="text-base">{institution.description}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Display Technical Skills */}
                        {about.technical.display && (
                            <div className="mt-5">
                                <h3 className="text-xl font-semibold">{about.technical.title}</h3>
                                {about.technical.skills.map((skill, index) => (
                                    <div key={index} className="mt-3">
                                        <h4 className="font-bold">{skill.title}</h4>
                                        <p className="text-base mt-1">{skill.description}</p>
                                        {skill.images && skill.images.map((img, imgIndex) => (
                                            <img key={imgIndex} src={img.src} alt={img.alt} className="w-40 h-auto mt-2" />
                                        ))}
                                    </div>
                                ))}
                            </div>
                        )}
                    </section>
                )}

                {/* Newsletter Section */}
                {newsletter.display && (
                    <section className="mb-10">
                        <h3 className="text-2xl font-semibold">{newsletter.title}</h3>
                        <p className="text-base mt-2">{newsletter.description}</p>
                    </section>
                )}

                {/* Blog Section */}
                <section className="mb-10">
                    <h2 className="text-3xl font-bold">{blog.title}</h2>
                    <p className="text-lg mt-2">{blog.description}</p>
                </section>

                {/* Work Section */}
                <section className="mb-10">
                    <h2 className="text-3xl font-bold">{work.title}</h2>
                    <p className="text-lg mt-2">{work.description}</p>
                </section>

                {/* Gallery Section */}
                <section className="mb-10">
                    <h2 className="text-3xl font-bold">{gallery.title}</h2>
                    <p className="text-lg mt-2">{gallery.description}</p>
                    <div className="flex flex-wrap mt-5">
                        {gallery.images.map((image, index) => (
                            <img
                                key={index}
                                src={image.src}
                                alt={image.alt}
                                className={`${image.orientation === 'horizontal' ? 'w-48' : 'w-32'} h-auto m-2`}
                            />
                        ))}
                    </div>
                </section>

                {/* Social Links */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold">Connect with me</h2>
                    <ul className="list-none mt-3">
                        {social.filter(s => s.link).map((item, index) => (
                            <li key={index} className="mt-2">
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default TestComponent;

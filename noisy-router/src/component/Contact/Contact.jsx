import React, { useState } from 'react'

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', tel: '', message: '' })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <div className="relative min-h-screen bg-black flex items-center justify-center px-4 py-20">
            <div className="w-full max-w-5xl">

                <div className="text-center mb-12">
                    <span className="inline-block text-xs font-semibold tracking-widest uppercase text-orange-400 mb-3">
                        Contact us
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                        Let's start a conversation
                    </h1>
                    <p className="mt-3 text-gray-400 text-lg">
                        We'd love to hear from you. Fill in the form and we'll be in touch.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-2xl overflow-hidden border border-white/10">

                    <div className="lg:col-span-2 bg-gradient-to-br from-orange-700 to-orange-900 p-8 sm:p-10 flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-2">Get in touch</h2>
                            <p className="text-orange-200 text-sm mb-10">
                                Reach out through any of these channels or use the form.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <svg className="w-5 h-5 text-orange-200" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-orange-300 uppercase tracking-wider font-semibold mb-0.5">Address</p>
                                        <p className="text-white text-sm leading-relaxed">Acme Inc, Street,<br />State, Postal Code</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <svg className="w-5 h-5 text-orange-200" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-orange-300 uppercase tracking-wider font-semibold mb-0.5">Phone</p>
                                        <p className="text-white text-sm">+44 1234567890</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <svg className="w-5 h-5 text-orange-200" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-orange-300 uppercase tracking-wider font-semibold mb-0.5">Email</p>
                                        <p className="text-white text-sm">noisy.contact@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 flex gap-3">
                            {['twitter', 'linkedin', 'github'].map((s) => (
                                <a key={s} href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center">
                                    <span className="sr-only">{s}</span>
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <circle cx="12" cy="12" r="4" />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-3 bg-[#111111] p-8 sm:p-10">
                        {submitted ? (
                            <div className="flex flex-col items-center justify-center h-full text-center py-10">
                                <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center mb-4">
                                    <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Message sent!</h3>
                                <p className="text-gray-400 text-sm">We'll get back to you as soon as possible.</p>
                                <button
                                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', tel: '', message: '' }) }}
                                    className="mt-6 text-sm text-orange-400 hover:text-orange-300 underline underline-offset-2 transition"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="name" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                                            Full name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Jane Smith"
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-orange-500 focus:bg-white/8 transition"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="noisy.contact@gmail.com"
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-orange-500 focus:bg-white/8 transition"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="tel" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                                        Phone number
                                    </label>
                                    <input
                                        type="tel"
                                        name="tel"
                                        id="tel"
                                        value={formData.tel}
                                        onChange={handleChange}
                                        placeholder="+44 1234 567890"
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-orange-500 focus:bg-white/8 transition"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us how we can help..."
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-orange-500 focus:bg-white/8 transition resize-none"
                                    />
                                </div>

                                <div className="flex items-center justify-between pt-1">
                                    <p className="text-xs text-gray-600">
                                        We'll never share your details with anyone.
                                    </p>
                                    <button
                                        type="submit"
                                        className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 active:scale-95 text-white font-semibold text-sm px-6 py-3 rounded-lg transition-all duration-200"
                                    >
                                        Send message
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
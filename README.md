# Vayana
An AI therapist, a companion to talk to

## Vayana AI Video Assistant
Vayana now includes a smart video assistant powered by **Google Generative AI (Gemini)**. This feature provides:
- Auto-summarization of video content
- Smart chapter and timestamp generation
- An interactive, animated floating widget on video pages

### Setup Instructions
To use the Vayana AI Video Assistant locally, you must provide your own Gemini API key:
1. Obtain a free API key from [Google AI Studio](https://aistudio.google.com/).
2. Create or open the `.env.local` file in the root directory.
3. Add your key:
```env
NEXT_PUBLIC_GEMINI_API_KEY=your_actual_api_key_here
```
4. Start the app using `npm run dev`.

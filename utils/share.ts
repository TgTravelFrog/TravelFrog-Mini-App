export const Share = {
    shareTwitter: (content?: string) => {
        const encodedContent = encodeURIComponent(content!);
        const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodedContent}`;
        (window as any).Telegram?.WebApp?.openLink(twitterShareUrl);
    },
    followTwitter: () => {
        const twitterFollowUrl = 'https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fdeveloper.twitter.com%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Efollow%7Ctwgr%5ETwitterDev&region=follow_link&screen_name=tg_frog';
        (window as any).Telegram?.WebApp?.openLink(twitterFollowUrl);
    },

    shareFacebook: (content?: string, url?: string) => {
        const encodedContent = encodeURIComponent(content!);

        if (!url) url = typeof window !== 'undefined' ? window.location.href : '';
        const encodedUrl = encodeURIComponent(url);

        const facebookShareUrl = `https://www.facebook.com/sharer.php?u=${encodedUrl}&t=${encodedContent}`;

        window.open(facebookShareUrl, '_blank');
    },

    shareReddit: (content?: string, url?: string) => {
        const encodedContent = encodeURIComponent(content || '');

        if (!url) url = typeof window !== 'undefined' ? window.location.href : '';
        const encodedUrl = encodeURIComponent(url);

        const redditShareUrl = `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedContent}`;

        window.open(redditShareUrl, '_blank');
    }
};

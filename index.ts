import React from "react"
import PopupWindow from "./lib/popupWindow"

export type ReactOauth2Options = {
    id: string
    url: string
    query: string
    queryOrHash: "query" | "hash"
}

export function useOauth2Login(options: ReactOauth2Options) {
    const signUp = React.useCallback(async () => {
        try {
            const data = await PopupWindow.open(options.id, `${options.url}?${options.query}`, {
                height: 800,
                width: 600,
                withHash: options.queryOrHash === "hash",
            })
            return data
        } catch (e) {
            throw new Error(e)
        }
    }, [options.query, options.url, options.id])

    return signUp
}

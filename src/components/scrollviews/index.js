import React from 'react'
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'

export function KeyboardAvoiding({ children }) {
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : null}
        >
            <ScrollView>
                {children}
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
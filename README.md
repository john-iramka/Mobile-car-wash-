# Mobile Car Wash App

A full-featured mobile app for car wash booking and management. Built with **Flutter** and integrated with **Firebase** for real-time queue, authentication, and notifications. Includes a web-based **Admin Dashboard** for staff.

---

## Features

### User App (Flutter)
- **Splash & Onboarding:** Branded animated splash, onboarding with feature highlights.
- **Authentication:** Email/password, phone OTP, Google/Facebook/Apple logins.
- **Profile Setup:** Name, phone, vehicle details, profile pic.
- **Home/Dashboard:** Greeting, quick booking, live busy indicator, upcoming bookings.
- **Booking Flow:** Service selection, add-ons, real-time calendar, summary & payment.
- **Busy Indicator:** Live queue/wait time (Firebase real-time updates).
- **Receipts & Booking History:** View/download PDF receipts, filter history.
- **Notifications:** Push alerts for bookings, reminders, completion.
- **Profile & Settings:** Edit info, loyalty points, dark mode, support chat/call.

### Admin Dashboard (React)
- **Live queue dashboard:** Upcoming bookings, mark progress/completion.
- **Busy status controls:** Update queue/status.
- **Booking management:** Filter/search.

---

## Tech Stack

- **Flutter** (Material 3, Cupertino, animations)
- **Firebase** (Auth, Firestore, Realtime Database, Cloud Functions, Messaging)
- **React** (Admin interface)
- **PDF Generation** (Receipts)
- **CI/CD ready** (optional)

---

## Getting Started

### 1. User App (Flutter)
```bash
cd car_wash_app
flutter pub get
flutter run
```
Set up Firebase (see `lib/services/firebase_service.dart`).

### 2. Admin Dashboard (React)
```bash
cd admin_dashboard
npm install
npm start
```

### 3. Firebase Setup
- Create a project in [Firebase Console](https://console.firebase.google.com/).
- Add mobile app (iOS/Android) and web app for admin dashboard.
- Configure `google-services.json`/`GoogleService-Info.plist` in `car_wash_app/`.
- Add API keys in `.env` files as needed.

---

## Folder Structure

```
Mobile-car-wash-/
│
├── car_wash_app/        # Flutter app
│   ├── lib/
│   │   ├── main.dart
│   │   ├── screens/
│   │   ├── models/
│   │   ├── services/
│   │   └── widgets/
│   ├── pubspec.yaml
│   └── ...
│
├── admin_dashboard/     # React admin dashboard
│   ├── src/
│   ├── package.json
│   └── ...
│
└── README.md
```

---

## Contribution

PRs, issues, and feature suggestions welcome!  
See [GitHub Issues](https://github.com/john-iramka/Mobile-car-wash-/issues).

---

## License

MIT

import { useState } from "react";
import PageHeader from "../component/PageHeader";

type SettingsProps = {
  theme: string;
  setTheme: (theme: string) => void;
};

function Settings({ theme, setTheme }: SettingsProps) {
  const [name, setName] = useState("Godswill Ofoedu");
  const [email, setEmail] = useState("ofoedu@gmail.com");
  const [message, setMessage] = useState("");
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Profile updated successfully!");
  }

  return (
    <>
      <PageHeader
        title="Settings"
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <section className="analytics-section">
        <section className="settings-section">
          <h2>Dashboard Settings</h2>
          <p>Manage your dashboard preferences here.</p>

          <form className="settings-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              placeholder="Enter your full name"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />

            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

            <button type="submit">Save Changes</button>

            {message && <p className="success-message">{message}</p>}
          </form>
        </section>

        <section className="notification-settings">
          <h2>Notification Settings</h2>
          <p>Choose whether you want to receive dashboard notifications.</p>

          <label htmlFor="notifications">Enable notifications</label>
          <input
            type="checkbox"
            id="notifications"
            checked={notificationsEnabled}
            onChange={(event) =>
              setNotificationsEnabled(event.target.checked)
            }
          />
        </section>

        <section className={`appearance-settings ${theme}`}>
          <h3>Appearance Settings</h3>
          <p>Choose a theme.</p>

          <label htmlFor="theme">Theme</label>
          <select
            id="theme"
            value={theme}
            onChange={(event) => setTheme(event.target.value)}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </section>
      </section>
    </>
  );
}

export default Settings;

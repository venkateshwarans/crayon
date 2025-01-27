import type { Meta, StoryObj } from "@storybook/react";
import { Settings, ShieldCheck, UserRound } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../Tabs";
import "../tabs.scss";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "600px", margin: "2rem" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1" text="Account" />
        <TabsTrigger value="tab2" text="Password" />
        <TabsTrigger value="tab3" text="Settings" />
      </TabsList>
      <TabsContent value="tab1">
        <h3>Account Settings</h3>
        <p>Manage your account preferences here.</p>
      </TabsContent>
      <TabsContent value="tab2">
        <h3>Password Settings</h3>
        <p>Change your password and security settings.</p>
      </TabsContent>
      <TabsContent value="tab3">
        <h3>General Settings</h3>
        <p>Configure your application settings.</p>
      </TabsContent>
    </Tabs>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1" text="Active Tab" />
        <TabsTrigger value="tab2" disabled text="Disabled Tab" />
        <TabsTrigger value="tab3" text="Another Tab" />
      </TabsList>
      <TabsContent value="tab1">
        <p>This is the content for the active tab.</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p>This content won't be accessible.</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p>This is another tab's content.</p>
      </TabsContent>
    </Tabs>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="custom-tabs">
      <TabsList className="custom-tabs-list">
        <TabsTrigger value="tab1" text="Tab 1" />
        <TabsTrigger value="tab2" text="Tab 2" />
      </TabsList>
      <TabsContent value="tab1" className="custom-content">
        <p>Content with custom styling.</p>
      </TabsContent>
      <TabsContent value="tab2" className="custom-content">
        <p>More content with custom styling.</p>
      </TabsContent>
    </Tabs>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Tabs defaultValue="tab1" variant="clear">
      <TabsList>
        <TabsTrigger value="tab1" text="Account" icon={<UserRound />} />
        <TabsTrigger value="tab2" text="Password" icon={<ShieldCheck />} />
        <TabsTrigger value="tab3" text="Settings" icon={<Settings />} />
      </TabsList>
      <TabsContent value="tab1">
        <h3>Account Settings</h3>
        <p>Manage your account preferences here.</p>
      </TabsContent>
      <TabsContent value="tab2">
        <h3>Password Settings</h3>
        <p>Change your password and security settings.</p>
      </TabsContent>
      <TabsContent value="tab3">
        <h3>General Settings</h3>
        <p>Configure your application settings.</p>
      </TabsContent>
    </Tabs>
  ),
};

export const Clear: Story = {
  render: () => (
    <Tabs defaultValue="tab1" variant="clear">
      <TabsList>
        <TabsTrigger value="tab1" text="Account" />
        <TabsTrigger value="tab2" text="Password" />
        <TabsTrigger value="tab3" text="Settings" />
      </TabsList>
      <TabsContent value="tab1">
        <h3>Account Settings</h3>
        <p>Manage your account preferences here.</p>
      </TabsContent>
      <TabsContent value="tab2">
        <h3>Password Settings</h3>
        <p>Change your password and security settings.</p>
      </TabsContent>
      <TabsContent value="tab3">
        <h3>General Settings</h3>
        <p>Configure your application settings.</p>
      </TabsContent>
    </Tabs>
  ),
};

export const Card: Story = {
  render: () => (
    <Tabs defaultValue="tab2" variant="card">
      <TabsList>
        <TabsTrigger value="tab1" text="Account" />
        <TabsTrigger value="tab2" text="Password" />
        <TabsTrigger value="tab3" text="Settings" />
      </TabsList>
      <TabsContent value="tab1">
        <h3>Account Settings</h3>
        <p>Manage your account preferences here.</p>
      </TabsContent>
      <TabsContent value="tab2">
        <h3>Password Settings</h3>
        <p>Change your password and security settings.</p>
      </TabsContent>
      <TabsContent value="tab3">
        <h3>General Settings</h3>
        <p>Configure your application settings.</p>
      </TabsContent>
    </Tabs>
  ),
};

export const Sunk: Story = {
  render: () => (
    <Tabs defaultValue="tab3" variant="sunk">
      <TabsList>
        <TabsTrigger value="tab1" text="Account" />
        <TabsTrigger value="tab2" text="Password" />
        <TabsTrigger value="tab3" text="Settings" />
      </TabsList>
      <TabsContent value="tab1">
        <h3>Account Settings</h3>
        <p>Manage your account preferences here.</p>
      </TabsContent>
      <TabsContent value="tab2">
        <h3>Password Settings</h3>
        <p>Change your password and security settings.</p>
      </TabsContent>
      <TabsContent value="tab3">
        <h3>General Settings</h3>
        <p>Configure your application settings.</p>
      </TabsContent>
    </Tabs>
  ),
};

---
id: cli-commands
title: Commands
sidebar_label: Commands
---

## Install

You'll need `npm` and `nodeJS`. And enter

```sh
npm install -g @canner/cli
```

to install your CLI tool. After install CLI tool you can use it by enter

```sh
canner
```

## Administrative

<table>
  <tr>
    <td>Command</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>login</td>
    <td>
      Log in to canner. <b>Required</b> before using other commands
    </td>
  </tr>
  <tr>
    <td>logout</td>
    <td>Log out from canner.</td>
  </tr>
  <tr>
    <td>init [appUrl]</td>
    <td>Choose an app and it will create <code>.cannerrc</code> configuration file in your current directory, or you can set the app directly with a appUrl. You can use this command to change configurations if you want.</td>
  </tr>
  <tr>
    <td>open</td>
    <td>Open current application website on your browser.</td>
  </tr>
  <tr>
    <td>open:dashboard</td>
    <td>Open current application dashboard on your browser.</td>
  </tr>
</table>

## App

<table>
  <tr>
    <td>Command</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>app:list</td>
    <td>List all your apps and their information.</td>
  </tr>
</table>

## Data

<table>
  <tr>
    <td>Command</td>
    <td>Description</td>
    <td>Options</td>
  </tr>
  <tr>
    <td>data:import</td>
    <td>
      Import your <code>canner.data.js</code>  to the default app url which is set in <code>.cannerrc</code>.
    </td>
    <td>
      <li><code>-u &lt;url&lt;, --url &lt;url&gt;</code> to import data to the specific app.</li>
      <li><code>-d, --drop-first</code> to drop the data before import.</li>
    </td>
  </tr>
</table>

## Script

<table>
  <tr>
    <td>Command</td>
    <td>Description</td>
    <td>Options</td>
  </tr>
  <tr>
    <td>script:deploy [filename]</td>
    <td>
      Deploy your <a href="#cannerschemajs"><code>canner.schema.js</code></a> to the default app url which is set in <code>.cannerrc</code>.
    </td>
    <td>
      <ul>
        <li><code>-u &lt;url&gt;, --url &lt;url&gt;</code> to deploy schema to the specific app.</li>
      </ul>
    </td>
  </tr>
</table>

## Schema [Canner v1 out-of-date]

> Looking for v1 document? Visit [http://docs.v1.canner.io/](http://docs.v1.canner.io/)

These command is used in older version of Canner

<table>
  <tr>
    <td>Command</td>
    <td>Description</td>
    <td>Options</td>
  </tr>
  <tr>
    <td>schema:deploy [filename]</td>
    <td>
      Deploy your <a href="#cannerschemajs"><code>canner.schema.js</code></a> to the default app url which is set in <code>.cannerrc</code>.
    </td>
    <td>
      <ul>
        <li><code>-u &lt;url&gt;, --url &lt;url&gt;</code> to deploy schema to the specific app.</li>
      </ul>
    </td>
  </tr>
</table>